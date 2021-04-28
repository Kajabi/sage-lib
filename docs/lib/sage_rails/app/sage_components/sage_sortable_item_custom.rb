class SageSortableItemCustom < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    grid_template: String,
    id: [:optional, Integer, String],
    url_update: [:optional, String],
  })
end
