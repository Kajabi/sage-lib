#!/bin/bash
# Verifies that the yarn check passes prior

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_bin_path=$sage_repo_path/bin

# Utilities
. $sage_bin_path/utils.sh

echo_custom '[MONOREPO]', 'Verifying package dependencies...'

if yarn check; then
  echo_custom '[MONOREPO]', 'All packages up to date!'
else
  echo_custom_error "Detected changes in the monorepo's dependencies... Running yarn install and adding yarn.lock to commit"
  cd $sage_repo_path
  yarn install
  git add yarn.lock
  git commit -m "chore(monorepo): updating yarn.lock for repository"
fi;
