class SageIcon < SageComponent
  set_attribute_schema({
    card_color: [:optional, SageSchemas::STATUSES],
    circular: [:optional, NilClass, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLOR_SLIDER],
    icon: SageSchemas::ICON,
    label: [:optional, NilClass, String],
    size: [:optional, NilClass, SageSchemas::ICON_SIZE],
  })
end
