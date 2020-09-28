require 'rails_helper'

RSpec.describe "Distributed `lib/` Package Versions" do
  scenario "SageRails and Sage frontend package version numbers should match" do
    frontend_package_contents = JSON.parse(
      File.read(
        File.join(Rails.root, 'package.json')
      )
    )

    version_gem = SageRails::VERSION
    version_package = frontend_package_contents["version"]

    expect(version_gem).to eq(version_package)
  end
end
