class SageTag < SageComponent
  set_attribute_schema({
    dismiss_attributes: [:optional, Hash],
    show_dismiss: [:optional, TrueClass],
    value: String,
  })
end
