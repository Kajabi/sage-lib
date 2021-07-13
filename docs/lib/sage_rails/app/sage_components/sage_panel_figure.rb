class SagePanelFigure < SageComponent
  set_attribute_schema({
    aspect_ratio: [:optional, NilClass, Integer, Float],
    background_color: [:optional, NilClass, String],
    bleed: [:optional, Set.new(["top", "bottom", "sides"])],
    is_wistia: [:optional, TrueClass],
    padded: [:optional, NilClass, TrueClass],
  })
end
