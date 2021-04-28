class SagePanelFigure < SageComponent
  set_attribute_schema({
    bleed: [:optional, Set.new(["top", "bottom", "sides"])],
    css_classes: [:optional, String],
    is_wistia: [:optional, TrueClass],
  })
end
