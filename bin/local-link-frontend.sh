#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_assets_path=$sage_repo_path/packages/sage-assets
sage_react_path=$sage_repo_path/packages/sage-react
sage_system_path=$sage_repo_path/packages/sage-system

. $sage_repo_path/bin/local-link-utils.sh

function yarn_install() {
  echo_custom "[FRONTEND]:" "yarn install --force"
  yarn install --silent --force
}

function show_status_of_package() {
  echo_custom "[FRONTEND]:" "Current Package Symlinks ⚒️"
  ( ls -l node_modules ; ls -l node_modules/@* ) | grep ^l # <-- This looks up the symlinked node_modules
}

function link() {
  (cd $sage_assets_path; yarn link)
  (cd $sage_react_path; yarn link)
  (cd $sage_system_path; yarn link)
  cd $sage_docs_path
  yarn link @kajabi/sage-assets
  yarn link @kajabi/sage-react
  yarn link @kajabi/sage-system
  cd $sage_repo_path
}

function unlink() {
  cd $sage_docs_path
  yarn unlink @kajabi/sage-assets
  yarn unlink @kajabi/sage-react
  yarn unlink @kajabi/sage-system
  (cd $sage_assets_path; yarn unlink)
  (cd $sage_react_path; yarn unlink)
  (cd $sage_system_path; yarn unlink)
  cd $sage_repo_path
}

if [ "$1" = "true" ] || [ "$1" = "false" ]; then

  cd $sage_repo_path

  # UNINSTALL Local Bindings
  if [ "$1" = "false" ]; then
    echo_custom "[FRONTEND]:" "Removing local Sage package"
    unlink
    yarn_install
    echo_custom "[FRONTEND]: Now Using..." "PRODUCTION SAGE ✅"

  # INSTALL Local Bindings
  elif [ "$1" = "true" ]; then
    echo_custom "[FRONTEND]:" "Link the local Sage frontend packages"
    link
    yarn_install
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
