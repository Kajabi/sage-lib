#!/bin/node
/**
 * Required:
 *  Environment Variables:
 *    SAGE_ORIGINAL_VER=<float>
 *
 * Takes the SAGE_ORIGINAL_VER env variable and compares that to the current
 * package version for the @kajabi/sage gem. Using the "semver" library will
 * then return the "type" of bump (major|minor|patch|etc.)
 *
 * This is used to verify how much the gem needs to be "bumped" to come
 * to parity with the package version.
 *
 * Called as part of the `version` hook in the `docs/package.json` file.
 *
 * @returns string
 */

const new_version = require('../../docs/package.json').version
const semver = require('semver')
console.log(semver.diff(process.env.SAGE_ORIGINAL_VER, new_version))
