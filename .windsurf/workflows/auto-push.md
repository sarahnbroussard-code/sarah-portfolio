---
description: Auto-commit and push portfolio changes to git, with notification
---

This workflow runs the auto-push script which:
1. Stages all changes in the repo
2. Commits with a timestamped snapshot message
3. Pushes to the current branch on origin
4. Logs the result and posts a macOS notification

Run manually any time, or rely on the scheduled hourly job.

## Run

// turbo
1. Execute the auto-push script.
```bash
/Users/sarahbroussard/CascadeProjects/sarah-portfolioV2/scripts/auto-push.sh
```

## Dry run (preview changes without committing)

1. Run the script in dry-run mode.
```bash
/Users/sarahbroussard/CascadeProjects/sarah-portfolioV2/scripts/auto-push.sh --dry-run
```

## View recent log

1. Tail the auto-push log.
```bash
tail -n 50 /Users/sarahbroussard/CascadeProjects/sarah-portfolioV2/.auto-push-logs/auto-push.log
```
