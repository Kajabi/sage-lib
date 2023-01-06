class SageGridCol < SageComponent
  set_attribute_schema({
    breakpoint: [:optional, NilClass, Symbol, String],
    large: [:optional, NilClass, String, Integer],
    medium: [:optional, NilClass, String, Integer],
    size: [:optional, NilClass, String, Integer],
    small: [:optional, NilClass, String, Integer],
    xlarge: [:optional, NilClass, String, Integer],
    vertical_alignment: [:optional, String],
  })
end
