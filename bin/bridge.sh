#!/bin/bash

sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_docs_path=$sage_repo_path/docs
sage_bin_path=$sage_repo_path/bin

. $sage_bin_path/utils.sh

$sage_bin_path/env.sh

export $(cat $sage_repo_path/.env | xargs)

cd $KAJABI_PRODUCTS_PATH;
$sage_bin_path/local-link.sh $1



