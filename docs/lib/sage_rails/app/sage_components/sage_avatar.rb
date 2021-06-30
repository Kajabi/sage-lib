class SageAvatar < SageComponent
  set_attribute_schema({
    centered: [:optional, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLORS],
    img: [:optional, String],
    initials: [:optional, String],
    size: [:optional, String],
  })
end
