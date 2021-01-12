class SageFeatureToggle < SageComponent
  set_attribute_schema({
    alt_text: [:optional, String],
    description: [:optional, String],
    image: [:optional, String],
    link_location: [:optional, String],
    link_text: [:optional, String],
    title: [:optional, String],
    title_tag: [:optional, String],
  })

  def sections
    %w(:feature_toggle_input)
  end
end
