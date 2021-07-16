class SageMediaTiles < SageComponent
  set_attribute_schema({
    items: [:optional, NilClass, [[SageSchemas::MEDIA_TILE]]]
  })
end
