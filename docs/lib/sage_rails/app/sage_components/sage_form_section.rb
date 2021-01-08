class SageFormSection < SageComponent
  set_attribute_schema({
    id: [:optional, String],
    subtitle: [:optional, String],
    title_tag: [:optional, String],
    title: [:optional, String],
  })
end
