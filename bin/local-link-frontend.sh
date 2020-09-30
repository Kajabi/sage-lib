#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs

. $sage_repo_path/bin/local-link-utils.sh

function yarn_install() {
  echo_custom "[FRONTEND]:" "yarn install --force"
  yarn install --silent --force
}

function show_status_of_package() {
  echo_custom "[FRONTEND]:" "Current Package Symlinks ⚒️"
  ( ls -l node_modules ; ls -l node_modules/@* ) | grep ^l # <-- This looks up the symlinked node_modules
}

if [ "$1" = "true" ] || [ "$1" = "false" ]; then

  cd $sage_repo_path

  # UNINSTALL Local Bindings
  if [ "$1" = "false" ]; then
    echo_custom "[FRONTEND]:" "Removing local Sage package"
    yarn unlink @kajabi/sage
    (cd $sage_repo_path; yarn unlink)

    yarn_install
    echo_custom "[FRONTEND]: Now Using..." "PRODUCTION SAGE ✅"

  # INSTALL Local Bindings
  elif [ "$1" = "true" ]; then
    echo_custom "[FRONTEND]:" "Use the local Sage frontend package located at: $sage_repo_path"
    (cd $sage_repo_path; yarn link)
    yarn link @kajabi/sage

    bundle_and_yarn
    echo_custom "[FRONTEND]: Now Using..." "LOCAL SAGE ✅"
  fi;

  show_status_of_package

elif [ "$1" = "status" ]; then
    show_status_of_package
else
  echo_custom "Run inside the of root the Kajabi-Products repo:"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link <BOOLEAN>"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link status"
fi
