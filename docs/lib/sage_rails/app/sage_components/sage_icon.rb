class SageIcon < SageComponent
  set_attribute_schema({
    adjacent_type: [:optional, NilClass, Set.new(SageTokens::RESPONSIVE_TYPE_SPECS)],
    background_height: [:optional, String],
    background_width: [:optional, String],
    card_color: [:optional, SageSchemas::STATUSES],
    circular: [:optional, NilClass, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLOR_SLIDER],
    icon: SageSchemas::ICON,
    label: [:optional, NilClass, String],
    size: [:optional, NilClass, SageSchemas::ICON_SIZE],
  })
end
