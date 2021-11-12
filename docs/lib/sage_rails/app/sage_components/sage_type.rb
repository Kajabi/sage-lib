class SageType < SageComponent
  set_attribute_schema({
    tag: String,
    type_spec: [:optional, String, Set.new(SageTokens::TYPE_SPECS)],
    color: [:optional, SageSchemas::COLOR_SLIDER],
    alignment: [:optional, SageSchemas::HORIZONAL_ALIGNMENT],
    weight: [:optional, Set.new(["med", "semi", "bold"])],
    text: [[[{
      content: [:optional, String],
    }]]],
  })
end
