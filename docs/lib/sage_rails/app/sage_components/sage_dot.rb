class SageDot < SageComponent
  set_attribute_schema({
    color: [:optional, NilClass, Set.new(SageTokens::COLORS), String],
    label: [:optional, NilClass, String],
  })
end
