class SageHero < SageComponent
  set_attribute_schema({
    alt_text: [:optional, NilClass, String],
    borderless: [:optional, NilClass, TrueClass],
    button: [:optional, NilClass, String],
    cta_attributes: [:optional, NilClass, Hash],
    contained: [:optional, NilClass, TrueClass],
    custom_background_color: [:optional, String],
    description: [:optional, NilClass, String],
    image: [:optional, NilClass, String],
    image_start: [:optional, NilClass, TrueClass],
    size: [:optional, NilClass, SageSchemas::HERO_SIZE],
    title: [:optional, NilClass, String],
    title_tag: [:optional, NilClass, String],
  })

  def sections
    %w(hero_footer_actions)
  end
end
