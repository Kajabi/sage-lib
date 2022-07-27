class SageVideoThumbnail < SageComponent
  set_attribute_schema({
    cta_attributes: [:optional, Hash],
    image_url: [:optional, String],
  })
end
