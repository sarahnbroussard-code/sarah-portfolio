#!/usr/bin/env bash
# auto-push.sh
# Auto-commits and pushes any uncommitted changes in this repo,
# logs the result, and posts a macOS notification.
#
# Usage: ./scripts/auto-push.sh [--dry-run] [--quiet]

set -uo pipefail

REPO_DIR="/Users/sarahbroussard/CascadeProjects/sarah-portfolioV2"
LOG_DIR="$REPO_DIR/.auto-push-logs"
LOG_FILE="$LOG_DIR/auto-push.log"

DRY_RUN=false
QUIET=false
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    --quiet)   QUIET=true ;;
  esac
done

mkdir -p "$LOG_DIR"

log() {
  local msg="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
  echo "$msg" | tee -a "$LOG_FILE"
}

notify() {
  if $QUIET; then return; fi
  local title="$1"
  local body="$2"
  /usr/bin/osascript -e "display notification \"$body\" with title \"$title\"" 2>/dev/null || true
}

cd "$REPO_DIR" || { log "FAIL: cannot cd to $REPO_DIR"; exit 1; }

# Ensure we're in a git repo
if ! git rev-parse --git-dir >/dev/null 2>&1; then
  log "FAIL: not a git repo"
  notify "Auto-Push Error" "Not a git repository"
  exit 1
fi

BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Skip if nothing changed
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  log "OK: no changes on $BRANCH"
  exit 0
fi

# Show what's changing
CHANGED=$(git status --short | head -10)
COUNT=$(git status --short | wc -l | tr -d ' ')

if $DRY_RUN; then
  log "DRY-RUN: would commit $COUNT change(s) on $BRANCH:"
  echo "$CHANGED" | tee -a "$LOG_FILE"
  exit 0
fi

# Stage everything
git add -A

# Build a concise commit message
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
SUMMARY=$(git diff --cached --shortstat | sed 's/^ *//')
COMMIT_MSG="auto: snapshot $TIMESTAMP

$SUMMARY

Files:
$(git diff --cached --name-status | head -20)"

# Commit
if ! git commit -m "$COMMIT_MSG" >>"$LOG_FILE" 2>&1; then
  log "FAIL: commit failed"
  notify "Auto-Push Failed" "git commit failed — see log"
  exit 1
fi

# Push
if git push origin "$BRANCH" >>"$LOG_FILE" 2>&1; then
  log "PUSHED: $COUNT change(s) to origin/$BRANCH ($SUMMARY)"
  notify "Portfolio auto-pushed" "$COUNT change(s) on $BRANCH · $SUMMARY"
else
  log "FAIL: push failed for $BRANCH"
  notify "Auto-Push Failed" "git push failed — see log"
  exit 1
fi
