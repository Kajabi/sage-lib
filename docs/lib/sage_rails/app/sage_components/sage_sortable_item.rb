class SageSortableItem < SageComponent
  set_attribute_schema({
    card: [:optional, TrueClass],
    css_classes: [:optional, String],
    id: [:optional, Integer, String],
    image: [:optional, String],
    label: [:optional, String],
    subtitle: [:optional, String],
    title: String,
    url_update: [:optional, String],
  })
end
