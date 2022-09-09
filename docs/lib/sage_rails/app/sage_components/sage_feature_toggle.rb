class SageFeatureToggle < SageComponent
  set_attribute_schema({
    alt_text: [:optional, NilClass, String],
    description: [:optional, NilClass, String],
    icon: [:optional, NilClass, SageIconCard::ATTRIBUTE_SCHEMA],
    image: [:optional, NilClass, String],
    links: [:optional, [[NilClass, {
      icon: [:optional, NilClass, String],
      location: [:optional, NilClass, String],
      target: [:optional, NilClass, String],
      text: [:optional, NilClass, String],
    }]]],
    label: [:optional, {
      color: [:optional, NilClass, SageSchemas::STATUSES],
      value: [:optional, NilClass, String],
    }],
    title: [:optional, NilClass, String],
    title_tag: [:optional, NilClass, String],
  })

  def sections
    %w(:feature_toggle_input)
  end
end
