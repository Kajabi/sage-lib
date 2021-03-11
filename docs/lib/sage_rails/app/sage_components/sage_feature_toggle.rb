class SageFeatureToggle < SageComponent
  set_attribute_schema({
    alt_text: [:optional, String],
    description: [:optional, String],
    icon: [:optional, SageIconCard::ATTRIBUTE_SCHEMA],
    image: [:optional, String],
    links: [:optional, [[{
      icon: [:optional, NilClass, String],
      location: [:optional, String],
      target: [:optional, String],
      text: [:optional, String],
    }]]],
    title: [:optional, String],
    title_tag: [:optional, String],
  })

  def sections
    %w(:feature_toggle_input)
  end
end
