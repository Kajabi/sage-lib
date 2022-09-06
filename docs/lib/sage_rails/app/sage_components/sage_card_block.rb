class SageCardBlock < SageComponent
  set_attribute_schema({
    color: [:optional, NilClass, String],
    type_block: [:optional, NilClass, TrueClass],
  })
end
