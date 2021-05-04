class SageAvatarGroup < SageComponent
  set_attribute_schema({
    items: [[
      color: [:optional, NilClass, SageSchemas::COLORS],
      css_classes: [:optional, String],
      initials: String,
    ]]
  })
end
