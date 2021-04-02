class SageSortableItemCustom < SageComponent
  set_attribute_schema({
    id: [:optional, Integer, String],
    url_update: [:optional, String],
  })
end
