class SageFormSection < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    id: [:optional, String],
    subtitle: [:optional, NilClass, String],
    title_tag: [:optional, String],
    title: [:optional, NilClass, String],
  })
end
