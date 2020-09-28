# Sage Tag Script
#
#   - Updates SageRails gem version
#   - Updates Sage frontend package version
#   - Creates a version-tagged git commit
#   - Pushes to master
#   - Deploys to Docs production
#
#   -----------------------------------------------------
#   USAGE:
#   $ bin/sage-tag.sh <VERSION CHANGE: patch / minor / major>

function echo_custom() {
  printf "\n\n\033[0;34m${1} \033[0m${2}\n\033[0;34m------------------------------------------------\033[0m\n"
}

function echo_custom_error() {
  printf "\n\n\033[0;31m${1} \033[0m${2}\n\n"
}

# PREFLIGHT: Run some checks to ensure everything is properly configured
# ----------------------------------------------------------------------
echo_custom "PREFLIGHT:" "Check arguments, branch status, & deploy access"

# Check that either 'patch' / 'minor' / 'major' have been passed
if [ "$1" != "patch" ] && [ "$1" != "minor" ] && [ "$1" != "major" ]; then
  echo_custom_error "Error:" "Invalid version change, expects: 'patch' / 'minor' / 'major'"
  exit 1
fi

if [[ -n $(git status --porcelain) ]]; then
  echo_custom_error "Error:" "Branch must be clean"
  exit 1
fi

# Does a git remote location of `heroku master` exist?
if ! [[ -n $(git ls-remote --exit-code --heads heroku master) ]]; then
  echo_custom_error "Error:" "Heroku remote git location does not exist. Ensure the Heroku CLI is installed and the remote location has been added 'heroku git:remote -a sage-design-system'"
  exit 1
fi

# PPREPARE
# ----------------------------------------------------------------------
echo_custom "PREPARE:" "Ensure master is up to date"

# Ensure the master branch is up to date
git fetch origin master --tags

# Switch to the master branch
git checkout master

# UPDATE
# ----------------------------------------------------------------------
echo_custom "UPDATE:" "Bumping the SageRails gem, Sage frontend package, & creating a version-tagged git commit"

# Use the ruby Bump gem to bump SageRails package but DON'T COMMIT, this will be handled by `yarn version`
bump $1 --no-commit
bundle install
git add .

# `yarn version` handles updating package.json and making a version-tagged git commit internally
# ---> NOTE: This command creates the the git tag and commit
yarn version --$1 --no-commit-hooks

# DEPLOY
# ----------------------------------------------------------------------
echo_custom "DEPLOY:" "Push latest tag to master and perform 'yarn run deploy'"

# Pushes the latest version of master back to origin with the new tagged git-commit
git push origin master --tags

# Run the package.json deploy script to push to production Docs site
yarn run deploy

# Success!
echo_custom "Successfully released and deployed version $1!"
