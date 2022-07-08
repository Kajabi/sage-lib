class SageVideoThumbnail < SageComponent
  set_attribute_schema({
    cta_attributes: [:optional, Hash],
    imageurl: [:optional, String],
  })
end
