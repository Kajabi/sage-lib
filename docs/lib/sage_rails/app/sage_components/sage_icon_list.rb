class SageIconList < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    items: [[{
      bullet: String,
      bullet_type: [:optional, String],
      body: String,
    }]],
  })
end
