class SagePanelFigure < SageComponent
  set_attribute_schema({
    bleed: [:optional, Set.new(["top", "bottom", "sides"])],
    is_wistia: [:optional, TrueClass],
  })
end
