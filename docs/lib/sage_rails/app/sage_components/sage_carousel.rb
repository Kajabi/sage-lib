class SageCarousel < SageComponent
  set_attribute_schema({
    options: [:optional, NilClass, {}],
  })

  def sections
    %w(carousel_items)
  end
end
