class SageCopyText < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    semibold: [:optional, TrueClass],
    value: [:optional, String],
  })
end
