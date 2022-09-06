class SageModalContent < SageComponent
  set_attribute_schema({
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    header_icon: [:optional, NilClass, {
      color: [:optional, NilClass, SageSchemas::COLOR_SLIDER],
      name: SageSchemas::ICON,
    }],
    header_image: [:optional, NilClass, String],
    help_content: [:optional, NilClass, String],
    help_link: [:optional, NilClass, Hash],
    help_title: [:optional, NilClass, String],
    spacing: [:optional, NilClass, Set.new(["panel", "card"])],
    subheader: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
  })

  def sections
    %w(header_actions modal_custom_header header_aside header_indicator header_progress_bar footer footer_aside)
  end
end
