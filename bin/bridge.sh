#!/bin/bash
# Creates a local-linked "bridge" to the packages within this repository

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin

# Utilities
. $sage_bin_path/utils.sh

# Prompt for environment variables
$sage_bin_path/env.sh

# Export all the environment variables from the .env file
export $(cat $sage_repo_path/.env | xargs)

# Cd to the exported path and run the local-link
cd $KAJABI_PRODUCTS_PATH;
$sage_bin_path/local-link.sh $1



