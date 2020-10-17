#!/bin/bash
# Setup local bindings for npm packages and rails gem

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin
# Utils
. $sage_bin_path/utils.sh

# If passeed true/false
if [ "$1" = "true" ] || [ "$1" = "false" ]; then
  # UNINSTALL Local Bindings
  if [ "$1" = "false" ]; then
    $sage_bin_path/local-link-gem.sh false
    $sage_bin_path/local-link-frontend.sh false
  # INSTALL Local Bindings
  elif [ "$1" = "true" ]; then
    $sage_bin_path/local-link-gem.sh true
    $sage_bin_path/local-link-frontend.sh true
  fi;
elif [ "$1" = "status" ]; then
    $sage_bin_path/local-link-gem.sh status
    $sage_bin_path/local-link-frontend.sh status
else
  echo 'Usage: ./bin/local-link.sh (<boolean> | status)'
fi
