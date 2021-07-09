class SageAvatar < SageComponent
  set_attribute_schema({
    centered: [:optional, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLORS],
    image: [:optional, {alt: [:optional, String], src: String}],
    initials: [:optional, String],
    size: [:optional, String],
  })
end
