class SageCarousel < SageComponent
  set_attribute_schema({
    options: [:optional, {}],
  })

  def sections
    %w(carousel_items)
  end
end
