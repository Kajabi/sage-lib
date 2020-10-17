#!/bin/node
/**
 * Return the version of a specific package library in the suite
 *
 * @returns string
 */

const package_path = '../../packages/sage-'

function get_version_from_package(package) {
  const mapping = {
    'sage': '../../docs/package.json',
    'sage-assets': package_path + 'assets/package.json',
    'sage-react': package_path + 'react/package.json',
    'sage-system': package_path + 'system/package.json',
  }
  const json = require(mapping[package])
  return json.version
}

console.log(get_version_from_package(process.argv[2]))


