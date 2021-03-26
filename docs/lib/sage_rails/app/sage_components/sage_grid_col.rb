class SageGridCol < SageComponent
  set_attribute_schema({
    breakpoint: [:optional, Symbol, String],
    css_classes: [:optional, String],
    size: [:optional, String, Integer],
  })
end
