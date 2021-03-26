class SageToast < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    style: [:optional, Set.new(["danger"])],
    value: String,
  })
end
