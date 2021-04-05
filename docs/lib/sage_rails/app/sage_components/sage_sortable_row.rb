class SageSortableRow < SageComponent
  set_attribute_schema({
    grid_template: String,
    id: [:optional, Integer, String],
    url_update: [:optional, String],
  })
end
