# Sage Local Link Script [ sage-frontend package only }
#   A wrapper around `yarn link` utility.
#   Replaces the Sage package location defined in Kajabi-Products' package.json
#   with a local Sage package using a symlink.
#
#   USAGE:
#   $ <PATH TO SAGE REPO>/bin/sage-local-link.sh <BOOLEAN>
#   $ <PATH TO SAGE REPO>/bin/sage-local-link.sh status
#   $ <PATH TO SAGE REPO>/bin/sage-local-link.sh --help

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )

function echo_custom() {
  printf "\n\n\033[0;34m${1} \033[0m${2}\n\033[0;34m------------------------------------------------\033[0m\n"
}

function yarn_install() {
  echo_custom "FRONTEND PACKAGE:" "yarn install --force"
  yarn install --silent --force
}

function show_status_of_package() {
  echo_custom "FRONTEND PACKAGE:" "Current Package Symlinks ⚒️"
  ( ls -l node_modules ; ls -l node_modules/@* ) | grep ^l # <-- This looks up the symlinked node_modules
}

if [ "$1" = "true" ] || [ "$1" = "false" ]; then

  # UNINSTALL Local Bindings
  if [ "$1" = "false" ]; then
    echo_custom "FRONTEND PACKAGE:" "Removing local Sage frontend package"
    yarn unlink sage
    (cd $sage_repo_path; yarn unlink)

    yarn_install
    echo_custom "Now Using..." "PRODUCTION SAGE ✅"

  # INSTALL Local Bindings
  elif [ "$1" = "true" ]; then
    echo_custom "FRONTEND PACKAGE:" "Use the local Sage frontend package located at: $sage_repo_path"
    (cd $sage_repo_path; yarn link)
    yarn link sage

    yarn_install
    echo_custom "Now Using..." "LOCAL SAGE ✅"
  fi;

  show_status_of_package

elif [ "$1" = "status" ]; then
    show_status_of_package
else
  echo_custom "Run inside the of root the Kajabi-Products repo:"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link <BOOLEAN>"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link status"
fi
