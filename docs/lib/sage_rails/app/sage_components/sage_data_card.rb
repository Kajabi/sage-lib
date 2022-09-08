class SageDataCard < SageComponent
  set_attribute_schema({
    body: [:optional, NilClass, String],
    color: [:optional, NilClass, Set.new(["danger", "muted"])],
    header_aside: [:optional, NilClass, String],
    title: String,
    title_tag: [:optional, NilClass, String],
  })
end
