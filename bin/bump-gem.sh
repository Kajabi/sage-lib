#!/bin/bash
# [CI PROCESS]
#
# Used to bump the Rails gem based on the version of the Package.

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
# Utilities
. $sage_repo_path/bin/utils.sh

echo_custom "[GEM]" "Bumping gem version..."

# Get the type of bump
cd $sage_repo_path
BUMP_TYPE=$(yarn run --silent gem:bump:type)

if [[ $BUMP_TYPE != 'null' ]]; then
  # Bump the gem with no commit
  (cd $sage_docs_path && bundle exec bump $BUMP_TYPE --no-commit)
  # Install to update the Gemfile.lock
  (cd $sage_docs_path && bundle install)
  # Add the new files to the commit
  git add $sage_docs_path/Gemfile.lock
  git add $sage_docs_path/lib/sage_rails/lib/sage_rails/version.rb
  git commit -m "chore(ci): updating rails gem version [ci skip]"
else
  echo 'Nothing to bump!'
fi;
