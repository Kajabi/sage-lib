#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs

. $sage_repo_path/bin/utils.sh

gem install -g bundler -v 1.17.3

function current_version() {
  (cd $sage_docs_path && bundle exec bump current | cut -d: -f2 | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
}

function tag() {
  git tag -a v$(current_version) -m "chore(gem): tagging gem."
}

function version_exists() {
  git tag -l | grep v$(current_version)
}

echo_custom "[GEM]" "Checking to see if Gem needs to be tagged..."

if version_exists;  then
  echo_custom "[GEM]" "Tag for version v$(current_version) already exists..."
else
  echo_custom "[GEM]" "Tagging v$(current_version)..."
  # tag
fi;
