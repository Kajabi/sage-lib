class SageTab < SageComponent
  set_attribute_schema({
    active: [:optional, TrueClass],
    attributes: [:optional, Hash],
    disabled: [:optional, TrueClass],
    target: [:optional, String],
    text: String,
  })
end
