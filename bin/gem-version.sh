#!/bin/bash
# Retrieve the current version of the Rails Gem

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs

# Get the current path, trim whitespace
function current_rails_version() {
  (cd $sage_docs_path && bundle exec bump current | cut -d: -f2 | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
}

echo $(current_rails_version)
