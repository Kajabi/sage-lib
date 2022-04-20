class SageHero < SageComponent
  set_attribute_schema({
    alt_text: [:optional, String],
    borderless: [:optional, TrueClass],
    button: [:optional, String],
    cta_attributes: [:optional, Hash],
    custom_background_color: [:optional, String],
    description: [:optional, String],
    image: [:optional, String],
    size: [:optional, SageSchemas::HERO_SIZE],
    title: [:optional, String],
    title_tag: [:optional, String],
  })
end
