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
if [[ $KAJABI_PRODUCTS_PATH != '' ]]; then
    cd $KAJABI_PRODUCTS_PATH;
    $sage_bin_path/local-link.sh $1

    if [[ $1 == 'true' ]]; then
      grep -q "^VITE_SAGE_BRIDGE_ENABLED=" "$KAJABI_PRODUCTS_PATH/.env" || echo "VITE_SAGE_BRIDGE_ENABLED=true" >> "$KAJABI_PRODUCTS_PATH/.env"
    else
      grep -v "^VITE_SAGE_BRIDGE_ENABLED=" "$KAJABI_PRODUCTS_PATH/.env" > temp.env && mv temp.env "$KAJABI_PRODUCTS_PATH/.env"
    fi
else
    echo_custom_error "Please check your .env file for a KAJABI_PRODUCTS_PATH variable."
    exit 1
fi;



