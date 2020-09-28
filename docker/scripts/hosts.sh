#!/bin/sh
# Adds entries to the host file for sage.test and
# kajabi-sage.test if missing

if grep -q sage "/etc/hosts"; then
  echo 'You already have sage added as a host entry'
else
  echo "127.0.0.1   sage.test" >> /etc/hosts
  echo "127.0.0.1   kajabi-sage.test" >> /etc/hosts
  echo "Added sage.test and kajabi-sage.test to hosts file"
fi
