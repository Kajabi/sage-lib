class SageDivider < SageComponent
  set_attribute_schema({
    color: [:optional, NilClass, String],
    vertical: [:optional, NilClass, TrueClass],
    offset: [:optional, NilClass, SageSchemas::DIVIDER_OFFSET],
  })
end
