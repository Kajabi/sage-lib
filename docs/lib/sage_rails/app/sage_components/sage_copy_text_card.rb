class SageCopyTextCard < SageComponent
  set_attribute_schema({
    semibold: [:optional, NilClass, TrueClass],
    truncate_contents: [:optional, NilClass, TrueClass],
  })
end
