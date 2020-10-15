#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin

function echo_custom() {
  printf "\n\n\033[0;34m${1} \033[0m${2}\n\033[0;34m------------------------------------------------\033[0m\n"
}

function echo_custom_error() {
  printf "\n\n\033[0;31m${1} \033[0m${2}\n\n"
}

function echo_help() {
  echo_custom "Run inside the of root the Kajabi-Products repo:"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link <BOOLEAN>"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link status"
}

function current_rails_version() {
  (cd $sage_docs_path && bundle exec bump current | cut -d: -f2 | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
}
