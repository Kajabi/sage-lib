#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs

. $sage_repo_path/bin/utils.sh

echo_custom "[GEM]" "Versioning"

echo "Would you like to bump the Sage Rails gem? (y/n): "
read BUMP

if [ $BUMP == 'y' ]; then
  echo "What type of bump? (major,minor,patch): "
  read BUMP_TYPE
  (cd $sage_docs_path && bundle exec bump $BUMP_TYPE --no-commit)
  git add $sage_docs_path/lib/sage_rails/lib/sage_rails/version.rb
  git commit -m "chore(gem): bumping rails gem"
fi;
