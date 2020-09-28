# -*- encoding: utf-8 -*-
# stub: lockup 1.5.1 ruby lib

Gem::Specification.new do |s|
  s.name = "lockup".freeze
  s.version = "1.5.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["gb Studio".freeze]
  s.date = "2019-09-05"
  s.description = "A simple gem to more elegantly place a staging server or other in-progress application behind a basic codeword. It\u2019s easy to implement, share with clients/collaborators, and more beautiful than the typical password-protection sheet.".freeze
  s.email = ["hello@grantblakeman.com".freeze]
  s.homepage = "http://lockupgem.com".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Lock staging servers from search engines and prying eyes.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>.freeze, [">= 3", "< 6.1"])
      s.add_development_dependency(%q<rspec-rails>.freeze, ["~> 3.5"])
      s.add_development_dependency(%q<capybara>.freeze, ["~> 2.9"])
      s.add_development_dependency(%q<launchy>.freeze, ["~> 2.4"])
      s.add_development_dependency(%q<byebug>.freeze, ["~> 9.0"])
    else
      s.add_dependency(%q<rails>.freeze, [">= 3", "< 6.1"])
      s.add_dependency(%q<rspec-rails>.freeze, ["~> 3.5"])
      s.add_dependency(%q<capybara>.freeze, ["~> 2.9"])
      s.add_dependency(%q<launchy>.freeze, ["~> 2.4"])
      s.add_dependency(%q<byebug>.freeze, ["~> 9.0"])
    end
  else
    s.add_dependency(%q<rails>.freeze, [">= 3", "< 6.1"])
    s.add_dependency(%q<rspec-rails>.freeze, ["~> 3.5"])
    s.add_dependency(%q<capybara>.freeze, ["~> 2.9"])
    s.add_dependency(%q<launchy>.freeze, ["~> 2.4"])
    s.add_dependency(%q<byebug>.freeze, ["~> 9.0"])
  end
end
