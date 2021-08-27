class SageModalContent < SageComponent
  set_attribute_schema({
    header_image: [:optional, String],
    icon: [:optional, {
      name: SageSchemas::ICON,
      color: [:optional, SageSchemas::COLOR_SLIDER]
    }],
    spacing: [:optional, NilClass, Set.new(["panel", "card"])],
    title: [:optional, String],
  })

  def sections
    %w(header_aside header_indicator footer footer_aside)
  end
end
