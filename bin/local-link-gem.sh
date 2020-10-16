#!/bin/bash
# Setup a local link to the internal gem in the directory called

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
# Utilities
. $sage_repo_path/bin/utils.sh

# Run a quiet bundle install in the current directory
function bundle_install() {
  echo_custom "[GEM]:" "bundle install in ${PWD}"
  bundle install --quiet
}

# Retrieve the current status of all local gems in the current directory
function show_status_of_gem() {
  echo_custom "[GEM]:" "Current local gem entries in ${PWD} 💎"
  bundle config | grep -e "^local\.*" -A 1
}

# If true or false is passed
if [ "$1" = "true" ] || [ "$1" = "false" ]; then
  # Uninstall local bindings if passed false
  if [ "$1" = "false" ]; then
    echo_custom "[GEM]:" "Removing local Sage gem in ${PWD}"
    bundle config --delete disable_local_branch_check
    bundle config --delete local.sage_rails
    bundle_install
    echo_custom "[GEM]" "${PWD} is now using PRODUCTION SAGE ✅"
  # Install local bindings if passed true
  elif [ "$1" = "true" ]; then
    echo_custom "[GEM]:" "Use local Sage gem ($sage_repo_path) in ${PWD}"
    bundle config --local disable_local_branch_check true
    bundle config --local local.sage_rails $sage_repo_path
    bundle_install
    echo_custom "[GEM]" "${PWD} is now using LOCAL SAGE ✅"
  fi;

  show_status_of_gem

elif [ "$1" = "status" ]; then
    show_status_of_gem
else
  echo 'Usage: ./bin/local-link-gem.sh (<boolean> | status)'
fi
