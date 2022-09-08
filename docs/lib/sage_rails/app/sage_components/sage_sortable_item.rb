class SageSortableItem < SageComponent
  set_attribute_schema({
    card: [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, Integer, String],
    image: [:optional, NilClass, String],
    label: [:optional, NilClass, String],
    subtitle: [:optional, NilClass, String],
    title: String,
    url_update: [:optional, NilClass, String],
  })
end
