class SageCopyButton < SageComponent
  set_attribute_schema({
    fill_container: [:optional, TrueClass],
    semibold: [:optional, TrueClass],
    value: String,
  })
end
