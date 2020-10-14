#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs

. $sage_repo_path/bin/utils.sh

function conventional_commit_json() {
  git log --no-merges --oneline --no-decorate $(git rev-parse --abbrev-ref HEAD)...master docs | sed 's/[^ ]* //' | sed 's/$/\n===/' | head -n -1 | npx conventional-commits-parser "==="
}

function uniq_types_from_commits() {
  conventional_commit_json | jq -r '.[] | .type' | uniq
}

if [ $(uniq_types_from_commits | grep 'feat') ]; then
  (cd $sage_docs_path && bundle exec bump 'minor' --no-commit)
elif [ $(uniq_types_from_commits | grep 'fix') ]; then
  (cd $sage_docs_path && bundle exec bump 'patch' --no-commit)
fi


