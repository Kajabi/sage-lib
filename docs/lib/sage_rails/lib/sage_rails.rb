require "sage_rails/engine"
require "sage_rails/exceptions"

module SageRails
  SAGE_THEMES = {
    LEGACY: "sage_theme_legacy",
    NEXT: "sage_theme_next",
  }

  mattr_accessor :sage_theme, default: SAGE_THEMES[:LEGACY]

  def self.next_theme?
    self.sage_theme == SAGE_THEMES[:NEXT]
  end

  def self.legacy_theme?
    self.sage_theme == SAGE_THEMES[:LEGACY]
  end
end
