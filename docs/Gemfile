# frozen_string_literal: true

source 'https://rubygems.org'

gem 'rails', '4.2.11.1'

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 4.x'

gem 'sage_rails', path: 'lib/sage_rails'

group :development, :test do
  gem 'byebug'
  gem 'pry'
  gem "rspec-rails"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the
  # background. Read more: https://github.com/rails/spring
  # Use Spring 1.3.3, Product's Spring version, to prevent needing to frequently restart Spring
  gem "spring", "1.3.3"

  # CLI Version Bumping Utility
  #  Used by bin/sage-tag.sh to automate sage_rails version bump workflow
  gem "bump", "~> 0.9.0"
end

gem "lockup", "~> 1.5"
