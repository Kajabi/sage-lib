class SageContainer < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    size: SageSchemaHelper::CONTAINER_SIZE,
  })
end
