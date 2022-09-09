class SageCardFigure < SageComponent
  set_attribute_schema({
    bleed: [:optional, NilClass, TrueClass],
    is_wistia: [:optional, NilClass, TrueClass],
  })
end
