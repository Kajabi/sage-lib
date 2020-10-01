#!/bin/sh
# Adds entries to the host file for sage.test if missing

if grep -q sage "/etc/hosts"; then
  echo 'You already have sage added as a host entry'
else
  echo "127.0.0.1   sage.test" >> /etc/hosts
  echo "Added sage.test to hosts file"
fi
