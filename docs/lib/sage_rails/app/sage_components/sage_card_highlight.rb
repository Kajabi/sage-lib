class SageCardHighlight < SageComponent
  set_attribute_schema({
    color: [:optional, NilClass, SageSchemas::COLORS],
    custom_color: [:optional, NilClass, String],
    position: [:optional, NilClass, Set.new(["top", "right", "bottom", "left"])],
    value: [:optional, NilClass, String],
  })
end
