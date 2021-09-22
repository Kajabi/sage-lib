class SageModalContent < SageComponent
  set_attribute_schema({
    header_image: [:optional, String],
    header_icon: [:optional, {
      name: SageSchemas::ICON,
      color: [:optional, SageSchemas::COLOR_SLIDER]
    }],
    help_content: [:optional, String],
    help_link: [:optional, Hash],
    help_title: [:optional, String],
    spacing: [:optional, NilClass, Set.new(["panel", "card"])],
    subheader: [:optional, String],
    title: [:optional, String],
  })

  def sections
    %w(header_aside header_indicator footer footer_aside)
  end
end
