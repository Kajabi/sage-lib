class SageTag < SageComponent
  set_attribute_schema({
    dismiss_attributes: [:optional, NilClass, Hash],
    show_dismiss: [:optional, NilClass, TrueClass],
    value: String,
  })
end
