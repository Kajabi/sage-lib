class SageCardFigure < SageComponent
  set_attribute_schema({
    bleed: [:optional, TrueClass],
    css_classes: [:optional, String],
    is_wistia: [:optional, TrueClass],
  })
end
