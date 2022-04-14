require "sage_rails/engine"
require "sage_rails/exceptions"

$sage_themes = {
  legacy: 'sage_theme_legacy',
  next: 'sage_theme_next',
}

$sage_theme = $sage_themes[:legacy]

module SageRails
end
