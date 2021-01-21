class SageExpandableCard < SageComponent
  set_attribute_schema({
    body: [:optional, String],
    css_classes: [:optional, String],
    footer: [:optional, String],
    header: String,
    header_aside: [:optional, String],
    header_tag: [:optional, String],
  })
end
 
