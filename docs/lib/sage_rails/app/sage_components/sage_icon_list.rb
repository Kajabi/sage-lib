class SageIconList < SageComponent
  set_attribute_schema({
    items: [[{
      bullet: String,
      bullet_type: [:optional, String],
      body: String,
    }]],
  })
end
