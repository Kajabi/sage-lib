class SageIconCard < SageComponent
  set_attribute_schema({
    attributes: [:optional, NilClass, Hash],
    background_color: [:optional, String],
    color: [:optional, Set.new(["draft", "published", "info", "locked", "warning", "danger"])],
    css_classes: [:optional, String],
    foreground_color: [:optional, String],
    icon: String,
    label: [:optional, String],
    size: [:optional, SageSchemaHelper::ICON_SIZE],
  })
end
