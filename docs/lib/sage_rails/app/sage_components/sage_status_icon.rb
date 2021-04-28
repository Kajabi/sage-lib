class SageStatusIcon < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    icon: String,
    value: String,
  })
end
