class SageHint < SageComponent
  set_attribute_schema({
    content: [:optional, NilClass, String],
    icon: [:optional, NilClass, SageSchemas::ICON],
  })
end
