class SageSortableItemCustom < SageComponent
  set_attribute_schema({
    icon: [:optional, String],
    id: [:optional, Integer, String],
    url_update: [:optional, String],
  })
end
