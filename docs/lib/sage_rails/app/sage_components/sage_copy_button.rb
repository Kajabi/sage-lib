class SageCopyButton < SageComponent
  set_attribute_schema({
    semibold: [:optional, TrueClass],
    value: String,
  })
end
