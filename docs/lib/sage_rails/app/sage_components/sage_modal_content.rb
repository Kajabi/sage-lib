class SageModalContent < SageComponent
  set_attribute_schema({
    title: [:optional, String],
    spacing: [:optional, NilClass, Set.new(["panel", "card"])],
  })

  def sections
    %w(header_aside footer footer_aside)
  end
end
