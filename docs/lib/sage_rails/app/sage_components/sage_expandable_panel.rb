class SageExpandablePanel < SageComponent
  set_attribute_schema({
    image: [:optional, String],
    summary_text: String,
  })
end
