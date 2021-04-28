class SageEmptyState < SageComponent
  set_attribute_schema({
    compact: [:optional, TrueClass],
    css_classes: [:optional, String],
    graphic: [:optional, String],
    icon: [:optional, String],
    title: [:optional, String],
    text: [:optional, String],
  })
end
