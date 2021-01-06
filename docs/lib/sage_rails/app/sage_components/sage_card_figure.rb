class SageCardFigure < SageComponent
  set_attribute_schema({
    bleed: [:optional, TrueClass],
    is_wistia: [:optional, TrueClass],
  })
end
