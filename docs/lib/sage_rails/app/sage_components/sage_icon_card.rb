class SageIconCard < SageComponent
  set_attribute_schema({
    color: Set.new(["draft", "published", "info", "warning", "danger"]),
    css_classes: [:optional, String],
    icon: String,
    label: [:optional, String],
    size: [:optional, SageSchemaHelper::ICON_SIZE],
    style: [:optional, Set.new(["subtle", "bold"])],
  })
end
