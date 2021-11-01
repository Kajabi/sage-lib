class SageSortableItemCustom < SageComponent
  set_attribute_schema({
    card: [:optional, TrueClass],
    grid_template: String,
    gap: [:optional, String],
    id: [:optional, Integer, String],
    url_update: [:optional, String],
  })
end
