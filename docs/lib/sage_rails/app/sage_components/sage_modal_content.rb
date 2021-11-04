class SageModalContent < SageComponent
  set_attribute_schema({
    header_icon: [:optional, {
      color: [:optional, SageSchemas::COLOR_SLIDER],
      name: SageSchemas::ICON,
    }],
    header_image: [:optional, String],
    help_content: [:optional, String],
    help_link: [:optional, Hash],
    help_title: [:optional, String],
    spacing: [:optional, NilClass, Set.new(["panel", "card"])],
    subheader: [:optional, String],
    title: [:optional, String],
  })

  def sections
    %w(header_actions modal_custom_header header_aside header_indicator footer footer_aside)
  end
end
