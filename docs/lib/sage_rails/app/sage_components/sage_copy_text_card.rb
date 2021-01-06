class SageCopyTextCard < SageComponent
  set_attribute_schema({
    semibold: [:optional, TrueClass],
    truncate_contents: [:optional, TrueClass],
  })
end
