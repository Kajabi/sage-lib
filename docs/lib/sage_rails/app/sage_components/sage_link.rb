class SageLink < SageComponent
  set_attribute_schema({
    external: [:optional, NilClass, TrueClass],
    help_link: [:optional, NilClass, TrueClass],
    icon: [:optional, NilClass, { name: String, style: Set.new(["left", "right"]) }],
    label: [:optional, NilClass, String],
    launch: [:optional, NilClass, TrueClass],
    remove_underline: [:optional, NilClass, TrueClass],
    show_label: [:optional, NilClass, TrueClass],
    small: [:optional, NilClass, TrueClass],
    style: [:optional, NilClass, Set.new(["primary", "neutral", "secondary", "danger"])],
    truncate: [:optional, NilClass, TrueClass],
    url: [:optional, NilClass, String],
  })
end
