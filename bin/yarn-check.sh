#!/bin/bash
# Verifies that the yarn check passes prior

# Paths
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )
sage_bin_path=$sage_repo_path/bin

# Utilities
. $sage_bin_path/utils.sh

if [ yarn check ]; then
  echo 'CHECK PASSED'
else
  echo 'CHECK FAILED'
fi;
