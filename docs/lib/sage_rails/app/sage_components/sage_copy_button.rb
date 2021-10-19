class SageCopyButton < SageComponent
  set_attribute_schema({
    borderless: [:optional, TrueClass],
    fill_container: [:optional, TrueClass],
    semibold: [:optional, TrueClass],
    value: String,
  })
end
