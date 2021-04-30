class SageAvatarGroup < SageComponent
  set_attribute_schema({
    items: [[
      color: [:optional, NilClass, Set.new(["purple", "sage", "yellow", "orange", "red"])],
      css_classes: [:optional, String],
      initials: String,
    ]]
  })
end
