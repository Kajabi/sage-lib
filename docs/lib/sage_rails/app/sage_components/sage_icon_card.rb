class SageIconCard < SageComponent
  set_attribute_schema({
    attributes: [:optional, NilClass, Hash],
    background_color: [:optional, String],
    color: [:optional, SageSchemas::STATUSES],
    foreground_color: [:optional, String],
    icon: String,
    label: [:optional, String],
    size: [:optional, SageSchemas::ICON_SIZE],
  })
end
