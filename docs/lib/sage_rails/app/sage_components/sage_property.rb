class SageProperty < SageComponent
  set_attribute_schema({
    icon: [:optional, String],
    value: [:optional, String],
  })
end
