class SageCopyText < SageComponent
  set_attribute_schema({
    semibold: [:optional, NilClass, TrueClass],
    value: [:optional, NilClass, String],
  })
end
