class SageModalContent < SageComponent
  set_attribute_schema({
    header_image: [:optional, String],
    spacing: [:optional, NilClass, Set.new(["panel", "card"])],
    title: [:optional, String],
  })

  def sections
    %w(header_aside header_indicator footer footer_aside)
  end
end
