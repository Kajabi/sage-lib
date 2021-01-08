class SageModalContent < SageComponent
  set_attribute_schema({
    title: [:optional, String],
  })

  def sections
    %w(header footer footer_aside)
  end
end
