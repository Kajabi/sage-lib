class SageContainer < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    size: SageSchemas::CONTAINER_SIZE,
  })
end
