class SageIcon < SageComponent
  set_attribute_schema({
    color: [:optional, NilClass, SageSchemas::COLOR_SLIDER],
    card_color: [:optional, Set.new(["draft", "published", "info", "locked", "warning", "danger"])],
    icon: SageSchemas::ICON,
    label: [:optional, NilClass, String],
    size: [:optional, NilClass, SageSchemas::ICON_SIZE]
  })
end 
