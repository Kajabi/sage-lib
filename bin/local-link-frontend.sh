#!/bin/bash
# Creates a yarn local link for all internal frontend packages
# This link is created on the folder being called from as well
# as the local rails gem

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_assets_path=$sage_repo_path/packages/sage-assets
sage_react_path=$sage_repo_path/packages/sage-react
sage_system_path=$sage_repo_path/packages/sage-system
sage_packs_path=$sage_repo_path/packages/sage-packs
# Utilities
. $sage_repo_path/bin/utils.sh

# Force a yarn install silently
function yarn_install() {
  echo_custom "[FRONTEND]:" "yarn install --force in ${PWD}"
  yarn install --silent --force
}

# Return the current status of the symlinked packages for the current directories
# node_modules folder.
function show_status_of_package() {
  echo_custom "[FRONTEND]:" "Current Package Symlinks in ${PWD} ⚒️"
  ( ls -l node_modules ; ls -l node_modules/@* ) | grep ^l || (echo 'No Packages Symlinked')
}

# Create local links to all packages
function linkSetup() {
  echo_custom "[FRONTEND]:" "Setting up local link in ${PWD}"
  (cd $sage_assets_path; yarn link)
  (cd $sage_react_path; yarn link)
  (cd $sage_system_path; yarn link)
  (cd $sage_packs_path; yarn link)
}

# Create a link in the current package to the local linked packages
function link() {
  echo_custom "[FRONTEND]:" "Linking local packages in ${PWD}"
  yarn link @kajabi/sage-assets
  yarn link @kajabi/sage-react
  yarn link @kajabi/sage-system
  yarn link @kajabi/sage-packs
}

# Destroy yarn link for package
function linkTeardown() {
  echo_custom "[FRONTEND]:" "Tearing down local link in ${PWD}"
  (cd $sage_assets_path; yarn unlink)
  (cd $sage_react_path; yarn unlink)
  (cd $sage_system_path; yarn unlink)
  (cd $sage_packs_path; yarn unlink)
}

# Destroy yarn local link to packages
function unlink() {
  echo_custom "[FRONTEND]:" "Unlinking local packages in ${PWD}"
  yarn unlink @kajabi/sage-assets
  yarn unlink @kajabi/sage-react
  yarn unlink @kajabi/sage-system
  yarn unlink @kajabi/sage-packs
}

# If passed true or false
if [ "$1" = "true" ] || [ "$1" = "false" ]; then

  # Uninstall local bindings on false
  if [ "$1" = "false" ]; then
    # Remove all local links in the current directory
    echo_custom "[FRONTEND]:" "Removing local Sage package in ${PWD}"
    unlink
    yarn_install
    # Remove all local links in the Rails gem
    cd $sage_docs_path
    unlink
    yarn_install
    # Teardown all the link directives
    linkTeardown
    echo_custom "[FRONTEND]:" "${PWD} is now using PRODUCTION SAGE ✅"
  # Install local bindings on true
  elif [ "$1" = "true" ]; then
    # Setup local links on packages
    linkSetup
    echo_custom "[FRONTEND]:" "Link the local Sage frontend packages in ${PWD}"
    # Link the packages in the local directory
    link
    yarn_install

    echo_custom "[FRONTEND]:" "Link the local Sage frontend packages in the Rails Gem ${sage_docs_path}"
    # Link the packages in the Rails gem
    cd $sage_docs_path
    link
    yarn_install
    echo_custom "[FRONTEND]:" "${PWD} is now Using LOCAL SAGE ✅"
  fi;

  show_status_of_package
# If "status" is given
elif [ "$1" = "status" ]; then
    show_status_of_package
# All other passed vars
else
    echo 'Usage: ./bin/local-link-frontend.sh (<boolean> | status)'
fi
