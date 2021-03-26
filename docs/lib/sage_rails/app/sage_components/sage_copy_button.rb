class SageCopyButton < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    semibold: [:optional, TrueClass],
    value: String,
  })
end
