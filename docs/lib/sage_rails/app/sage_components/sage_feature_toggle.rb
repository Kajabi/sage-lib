class SageFeatureToggle < SageComponent
  attr_accessor :alt_text
  attr_accessor :description
  attr_accessor :image
  attr_accessor :link_location
  attr_accessor :link_text
  attr_accessor :title

  def sections
    %w(:feature_toggle_input)
  end
end
