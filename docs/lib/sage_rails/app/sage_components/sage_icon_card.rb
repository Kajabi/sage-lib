class SageIconCard < SageComponent
  set_attribute_schema({
    attributes: [:optional, NilClass, Hash],
    background_color: [:optional, NilClass, String],
    color: [:optional, NilClass, SageSchemas::STATUSES],
    foreground_color: [:optional, NilClass, String],
    icon: String,
    label: [:optional, NilClass, String],
    round: [:optional, NilClass, TrueClass],
    size: [:optional, NilClass, SageSchemas::ICON_SIZE],
  })
end
