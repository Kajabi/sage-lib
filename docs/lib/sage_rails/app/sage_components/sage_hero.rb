class SageHero < SageComponent
  set_attribute_schema({
    cta_attributes: [:optional, Hash],
    description: [:optional, String],
    image: [:optional, String],
    image_alt_text: [:optional, String],
    hero_size: [:optional, SageSchemas::HERO_SIZE],
    title: [:optional, String],
    title_tag: [:optional, String],
  })

  def sections
    %w(hero_footer_actions hero_branding)
  end
end
