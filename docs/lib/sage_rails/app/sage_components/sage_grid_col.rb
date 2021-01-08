class SageGridCol < SageComponent
  set_attribute_schema({
    breakpoint: [:optional, Symbol, String],
    size: [:optional, String, Integer],
  })
end
