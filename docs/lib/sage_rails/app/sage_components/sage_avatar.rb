class SageAvatar < SageComponent
  set_attribute_schema({
    centered: [:optional, TrueClass],
    color: [:optional, NilClass, Set.new(["purple", "sage", "yellow", "orange", "red"])],
    initials: String,
    size: [:optional, String],
  })
end
