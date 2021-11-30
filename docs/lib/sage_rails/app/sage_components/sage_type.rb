class SageType < SageComponent
  set_attribute_schema({
    tag: [:optional, String],
    type_spec: [:optional, String, Set.new(SageTokens::TYPE_SPECS)],
    color: [:optional, SageSchemas::COLOR_SLIDER],
    alignment: [:optional, SageSchemas::HORIZONAL_ALIGNMENT],
    content: [:optional, String, [[
      :optional, String,
    ]]],
  })
end
