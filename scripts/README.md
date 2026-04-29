# Auto-Push Skill

Hourly auto-commit + push for this repo, with macOS notifications.

## Files

| File | Purpose |
|---|---|
| `scripts/auto-push.sh` | The actual commit + push script |
| `scripts/com.sarahbroussard.portfolio-autopush.plist` | macOS launchd job (fires every hour) |
| `.windsurf/workflows/auto-push.md` | `/auto-push` slash command in Windsurf |
| `.auto-push-logs/` | Log files (gitignored) |

## Install (one time)

```bash
# 1. Make script executable
chmod +x scripts/auto-push.sh

# 2. Copy launchd plist into your LaunchAgents folder
cp scripts/com.sarahbroussard.portfolio-autopush.plist ~/Library/LaunchAgents/

# 3. Load it (starts immediately + every hour after)
launchctl load ~/Library/LaunchAgents/com.sarahbroussard.portfolio-autopush.plist
```

After install, the job runs once at load and then every 3600 seconds (1 hour).

## Verify it's running

```bash
launchctl list | grep portfolio-autopush
tail -f .auto-push-logs/auto-push.log
```

## Run on demand

- **In Windsurf:** type `/auto-push`
- **In terminal:** `./scripts/auto-push.sh`
- **Preview only:** `./scripts/auto-push.sh --dry-run`

## Pause / disable

```bash
launchctl unload ~/Library/LaunchAgents/com.sarahbroussard.portfolio-autopush.plist
```

## Re-enable

```bash
launchctl load ~/Library/LaunchAgents/com.sarahbroussard.portfolio-autopush.plist
```

## Uninstall completely

```bash
launchctl unload ~/Library/LaunchAgents/com.sarahbroussard.portfolio-autopush.plist
rm ~/Library/LaunchAgents/com.sarahbroussard.portfolio-autopush.plist
```

## What gets committed

- Every modified, new, or deleted file (`git add -A`)
- Commit message format: `auto: snapshot YYYY-MM-DD HH:MM` followed by a short stat and file list
- Pushes to whatever branch you're currently on

## Notes

- If there are no changes, the script logs "no changes" and exits quietly (no commit, no notification).
- If push fails (e.g. network down, conflict), you'll get a "Auto-Push Failed" notification and the error is in the log.
- Logs live in `.auto-push-logs/` and are gitignored.
- Notifications use macOS native AppleScript notifications.
