class SageAvatar < SageComponent
  set_attribute_schema({
    color: [:optional, Set.new([nil, "purple", "sage", "yellow", "orange", "red"])],
    css_classes: [:optional, String],
    initials: String,
  })
end
