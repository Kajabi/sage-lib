class SageSortableItemCustom < SageComponent
  set_attribute_schema({
    card: [:optional, NilClass, TrueClass],
    grid_template: [:optional, NilClass, String],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    id: [:optional, NilClass, Integer, String],
    url_update: [:optional, NilClass, String],
  })
end
