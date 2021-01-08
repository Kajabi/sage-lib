class SageTab < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    attributes: [:optional, NilClass, Hash],
    disabled: [:optional, NilClass, TrueClass],
    target: [:optional, NilClass, String],
    text: String,
  })
end
