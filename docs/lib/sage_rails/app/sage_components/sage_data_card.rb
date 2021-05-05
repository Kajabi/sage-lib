class SageDataCard < SageComponent
  set_attribute_schema({
    body: [:optional, String],
    color: [:optional, NilClass, Set.new(["danger", "muted"])],
    header_aside: [:optional, String],
    title: String,
    title_tag: [:optional, String],
  })
end
