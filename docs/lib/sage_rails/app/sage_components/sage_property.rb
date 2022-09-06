class SageProperty < SageComponent
  set_attribute_schema({
    icon: [:optional, NilClass, String],
    value: [:optional, NilClass, String],
  })
end
