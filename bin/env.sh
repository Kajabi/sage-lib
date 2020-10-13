#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin

. $sage_bin_path/utils.sh

function add_kajabi_products_path() {
  read -p "Enter the path to your Kajabi Products repo (Ctrl+c to quit): " KAJABI_PRODUCTS_PATH
  sed -i "s@KAJABI_PRODUCTS_PATH=@KAJABI_PRODUCTS_PATH=$KAJABI_PRODUCTS_PATH@" $sage_repo_path/.env
}

if [ ! -f $sage_repo_path/.env ]; then
  cp $sage_repo_path/.env.dist $sage_repo_path/.env
fi;

if grep -Fxq "KAJABI_PRODUCTS_PATH=" $sage_repo_path/.env; then
  add_kajabi_products_path
fi;
