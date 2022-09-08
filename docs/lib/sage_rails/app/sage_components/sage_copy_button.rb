class SageCopyButton < SageComponent
  set_attribute_schema({
    borderless: [:optional, NilClass, TrueClass],
    fill_container: [:optional, NilClass, TrueClass],
    semibold: [:optional, NilClass, TrueClass],
    value: String,
  })
end
