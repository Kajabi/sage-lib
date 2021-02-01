class SageAvatar < SageComponent
  set_attribute_schema({
    centered: [:optional, TrueClass],
    color: [:optional, NilClass, Set.new(["purple", "sage", "yellow", "orange", "red"])],
    css_classes: [:optional, String],
    initials: String,
  })
end
