#!/bin/bash
# Utility functions

# Custom echo header
function echo_custom() {
  printf "\n\n\033[0;34m${1} \033[0m${2}\n\033[0;34m------------------------------------------------\033[0m\n"
}

# Custom error handler
function echo_custom_error() {
  printf "\n\n\033[0;31m${1} \033[0m${2}\n\n"
}
