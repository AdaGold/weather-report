#!/bin/sh

# Stop the script if an error occurs
set -e

DEPLOY_BRANCH="refs/heads/solution" # Your deployment branch name

# 1. Force add the dist directory contents (even if ignored)
git add -f dist/

# 2. Create a temporary commit of only the staged dist files
# This commit won't show up in your final main branch history
git commit -m "Temporary deploy commit"

# 3. Push the *HEAD* of the current branch to the deployment branch
# The split command extracts only the dist history from this latest commit
git push origin `git subtree split --prefix dist HEAD`:$DEPLOY_BRANCH --force

# 4. Revert the temporary commit, keeping your main branch clean
git reset HEAD~1
# Use 'git checkout .' to discard changes in working directory if reset doesn't do it fully

echo "Deployment complete and working directory cleaned."

