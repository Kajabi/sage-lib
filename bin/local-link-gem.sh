#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs

. $sage_repo_path/bin/local-link-utils.sh

function bundle_install() {
  echo_custom "[GEM]:" "bundle install"
  bundle install --quiet
}

function show_status_of_gem() {
  echo_custom "[GEM]:" "Current Bundle Config Entries 💎"
  bundle config
}

if [ "$1" = "true" ] || [ "$1" = "false" ]; then

  # UNINSTALL Local Bindings
  if [ "$1" = "false" ]; then
    echo_custom "[GEM]:" "Removing local Sage gem"
    bundle config --delete disable_local_branch_check
    bundle config --delete local.sage_rails
    bundle_install
    echo_custom "[GEM] Now Using..." "PRODUCTION SAGE ✅"

  # INSTALL Local Bindings
  elif [ "$1" = "true" ]; then
    echo_custom "[GEM]:" "Use local Sage gem located at: $sage_repo_path"
    bundle config --local disable_local_branch_check true
    bundle config --local local.sage_rails $sage_repo_path
    bundle_install
    echo_custom "[GEM]: Now Using..." "LOCAL SAGE ✅"
  fi;

  show_status_of_gem

elif [ "$1" = "status" ]; then
    show_status_of_gem
else
  echo_help
fi
