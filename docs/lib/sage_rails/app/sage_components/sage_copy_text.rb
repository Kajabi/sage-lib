class SageCopyText < SageComponent
  set_attribute_schema({
    semibold: [:optional, TrueClass],
    value: [:optional, String],
  })
end
