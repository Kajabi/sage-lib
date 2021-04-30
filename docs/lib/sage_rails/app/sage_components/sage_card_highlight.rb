class SageCardHighlight < SageComponent
  set_attribute_schema({
    color: [:optional, SageSchemas::COLORS],
    custom_color: [:optional, String],
    position: [:optional, Set.new(["top", "right", "bottom", "left"])],
    value: [:optional, String],
  })
end
