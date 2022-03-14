class SageGridCol < SageComponent
  set_attribute_schema({
    breakpoint: [:optional, Symbol, String],
    large: [:optional, String, Integer],
    medium: [:optional, String, Integer],
    size: [:optional, String, Integer],
    small: [:optional, String, Integer],
  })
end
