#!/bin/bash

# Sage Local Link Script
#
#   Frontend (sage-frontend):
#   A wrapper around `yarn link` utility.
#   Replaces the Sage package location defined in Kajabi-Products' package.json
#   with a local Sage package using a symlink.
#
#   Backend (sage_rails):
#   Sets a custom local `bundle config` location for sage_rails gem
#
#   -----------------------------------------------------
#   USAGE:
#   $ <PATH TO SAGE REPO>/bin/sage-local-link.sh <BOOLEAN>
#   $ <PATH TO SAGE REPO>/bin/sage-local-link.sh status
#   $ <PATH TO SAGE REPO>/bin/sage-local-link.sh --help

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin

. $sage_bin_path/utils.sh

function bundle_and_yarn() {
  echo_custom "GEM:" "bundle install"
  cd $sage_docs_path
  bundle install --quiet

  cd $sage_repo_path
  echo_custom "FRONTEND PACKAGE:" "yarn install --force"
  yarn install --silent --force
}

function show_status_of_gem_and_package() {
  echo_custom "GEM:" "Current Bundle Config Entries 💎"
  bundle config

  echo_custom "FRONTEND PACKAGE:" "Current Package Symlinks ⚒️"
  ( ls -l node_modules ; ls -l node_modules/@* ) | grep ^l # <-- This looks up the symlinked node_modules
}

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
  echo_custom "Run inside the of root the Kajabi-Products repo:"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link <BOOLEAN>"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link status"
fi
