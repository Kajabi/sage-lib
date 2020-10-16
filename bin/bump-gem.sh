#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs

. $sage_repo_path/bin/utils.sh

echo_custom "[GEM]" "Bumping gem version..."

cd $sage_repo_path
BUMP_TYPE=$(yarn run --silent gem:bump:type)

if [[ $BUMP_TYPE != 'null' ]]; then
  (cd $sage_docs_path && bundle exec bump $BUMP_TYPE --no-commit)
else
  echo 'Nothing to bump!'
fi;
