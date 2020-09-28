$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "sage_rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "sage_rails"
  s.version     = SageRails::VERSION
  s.authors     = ["cmcfadzean"]
  s.email       = ["court@kajabi.com"]
  s.homepage    = "https://github.com/Kajabi/sage_design_system"
  s.summary     = "temp"
  s.description = "temp"
  s.license     = "MIT"

  s.files = Dir["{app,config,lib}/**/*"]

  s.add_runtime_dependency "rails"

  s.add_development_dependency "pry"
end
