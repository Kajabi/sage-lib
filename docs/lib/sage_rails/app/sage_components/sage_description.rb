class SageDescription < SageComponent
  set_attribute_schema({
    title: [:optional, String],
    data: [:optional, NilClass, String, Integer, Hash],
    link: [:optional, String],
    id: [:optional, String],
  })
end
