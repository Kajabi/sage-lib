class SageIconList < SageComponent
  set_attribute_schema({
    items: [[{
      bullet: String,
      bullet_type: [:optional, NilClass, String],
      body: String,
    }]],
  })
end
