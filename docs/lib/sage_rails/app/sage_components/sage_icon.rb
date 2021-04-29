class SageIcon < SageComponent
  set_attribute_schema({
    color: [:optional, NilClass, SageSchemas::COLOR_SLIDER],
    css_classes: [:optional, String],
    icon: SageSchemas::ICON,
    label: [:optional, NilClass, String],
    size: [:optional, NilClass, SageSchemas::ICON_SIZE]
  })
end
