class SageEmptyState < SageComponent
  set_attribute_schema({
    icon: [:optional, String],
    title: [:optional, String],
    text: [:optional, String],
    compact: [:optional, TrueClass],
  })
end
