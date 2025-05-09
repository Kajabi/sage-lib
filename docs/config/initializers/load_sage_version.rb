# react_package_contents = JSON.parse(
#                               File.read(
#                                 File.join("../packages/sage-react/", "package.json")
#                               )
#                             )
# assets_package_contents = JSON.parse(
#                               File.read(
#                                 File.join("../packages/sage-assets/", "package.json")
#                               )
#                             )
# system_package_contents = JSON.parse(
#                               File.read(
#                                 File.join("../packages/sage-system/", "package.json")
#                               )
#                             )
$SAGE_VERSION_GEM = SageRails::VERSION
# $SAGE_VERSION_REACT = react_package_contents["version"]
# $SAGE_VERSION_ASSETS = assets_package_contents["version"]
# $SAGE_VERSION_SYSTEM = system_package_contents["version"]

$SAGE_GITHUB_URL = "https://github.com/Kajabi/sage-lib"
$SAGE_GITHUB_PACKAGE_URL = "#{$SAGE_GITHUB_URL}/tree/@kajabi/sage@#{$SAGE_VERSION_GEM}/packages"

$SAGE_VERSION_GEM_URL = "#{$SAGE_GITHUB_PACKAGE_URL}/sage-system"
# $SAGE_VERSION_REACT_URL = "#{$SAGE_GITHUB_PACKAGE_URL}/sage-react"
# $SAGE_VERSION_ASSETS_URL = "#{$SAGE_GITHUB_PACKAGE_URL}/sage-assets"
# $SAGE_VERSION_SYSTEM_URL = "#{$SAGE_GITHUB_PACKAGE_URL}/sage-system"
$SAGE_RELEASE_URL = "#{$SAGE_GITHUB_URL}/releases/tag/v#{$SAGE_VERSION_GEM}"
