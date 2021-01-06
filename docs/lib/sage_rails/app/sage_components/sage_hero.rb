class SageHero < SageComponent
  set_attribute_schema({
    alt_text: [:optional, String],
    button: [:optional, String],
    cta_attributes: [:optional, Hash],
    description: [:optional, String],
    image: [:optional, String],
    title: [:optional, String],
    title_tag: [:optional, String],
    css_classes: [:optional, String],
  })
end
