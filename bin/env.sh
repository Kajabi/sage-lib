#!/bin/bash
# Ensure we have all ENV variables set by the user

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin
# Utils
. $sage_bin_path/utils.sh

# Prompt the user for a path, replace the .env value with the supplied
function add_kajabi_products_path() {
  read -p "Enter the path to your Kajabi Products repo (Ctrl+c to quit): " KAJABI_PRODUCTS_PATH
  sed -i "s@KAJABI_PRODUCTS_PATH=@KAJABI_PRODUCTS_PATH=$KAJABI_PRODUCTS_PATH@" $sage_repo_path/.env
}

# If no env file exists then copy it from the sample.
if [ ! -f $sage_repo_path/.env ]; then
  cp $sage_repo_path/.env.dist $sage_repo_path/.env
fi;

# Check to see if the KAJABI_PRODUCTS_PATH is empty, and if it is add one.
if grep -Fxq "KAJABI_PRODUCTS_PATH=" $sage_repo_path/.env; then
  add_kajabi_products_path
fi;
