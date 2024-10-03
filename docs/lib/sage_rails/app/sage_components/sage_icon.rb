class SageIcon < SageComponent
  set_attribute_schema({
    adjacent_type: [:optional, NilClass, Set.new(SageTokens::RESPONSIVE_TYPE_SPECS)],
    background_height: [:optional, NilClass, String],
    background_width: [:optional, NilClass, String],
    card_color: [:optional, NilClass, Set.new(SageSchemas::STATUSES), String],
    circular: [:optional, NilClass, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLOR_SLIDER],
    icon: SageSchemas::ICON,
    label: [:optional, NilClass, String],
    size: [:optional, NilClass, SageSchemas::ICON_SIZE],
    card_css_classes: [:optional, NilClass, String],
  })
end

def generated_card_css_classes
  @generated_css_classes ||= ""
end

def card_css_classes
  @card_css_classes ||= ""
end

def card_css_classes=(card_classes_string)
  @card_css_classes = card_classes_string
  generated_card_css_classes << " #{card_classes_string}"
end
