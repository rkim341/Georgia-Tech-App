---
name: save
description: Commit all changes and push to the current branch. Use when asked to save, commit, or push work.
---

1. Run `git status -sb` and `git diff --stat`. If there is nothing to commit, say so and stop.
2. Check the current branch. If it is `main`/`master`, ask the user for a branch name before committing, unless they already said to push to main. Create the branch with `git switch -c <name>`.
3. Stage everything (`git add -A`); first make sure no secrets or junk (`.env`, `node_modules`, build output) are being added.
4. Commit with a short, imperative message that describes the change. Follow any attribution line the host agent requires.
5. Push: `git push -u origin HEAD`.
6. Report the branch name and the repo URL. Never force-push.
