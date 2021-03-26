class SageProgressBar < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    percent: 0..100,
    label: String,
  })
end
