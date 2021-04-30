class SageAvatar < SageComponent
  set_attribute_schema({
    centered: [:optional, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLORS],
    initials: String,
    size: [:optional, String],
  })
end
