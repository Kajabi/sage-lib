#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin

. $sage_bin_path/utils.sh

echo_custom '[SETUP] Bundling Docs Site'
cd $sage_docs_path
gem install bundler -v $(tail -n 1 Gemfile.lock)
bundle install
