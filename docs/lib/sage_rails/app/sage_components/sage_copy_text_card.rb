class SageCopyTextCard < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    semibold: [:optional, TrueClass],
    truncate_contents: [:optional, TrueClass],
  })
end
