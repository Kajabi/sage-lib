class SageHint < SageComponent
  set_attribute_schema({
    content: [:optional, String],
    icon: [:optional, NilClass, SageSchemas::ICON],
  })
end
