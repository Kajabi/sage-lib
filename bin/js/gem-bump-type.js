#!/bin/node

const new_version = require('../../docs/package.json').version
const semver = require('semver')
console.log(semver.diff(process.env.SAGE_ORIGINAL_VER, new_version))
