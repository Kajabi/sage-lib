class SageContainer < SageComponent
  set_attribute_schema({
    size: SageSchemas::CONTAINER_SIZE,
    tag: [:optional, String],
  })
end
