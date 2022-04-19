class SageLink < SageComponent
  set_attribute_schema({
    external: [:optional, TrueClass],
    help_link: [:optional, TrueClass],
    icon: [:optional, NilClass, { name: String, style: Set.new(["left", "right"]) }],
    label: [:optional, String],
    launch: [:optional, TrueClass],
    remove_underline: [:optional, TrueClass],
    show_label: [:optional, TrueClass],
    small: [:optional, TrueClass],
    style: [:optional, NilClass, Set.new(["primary", "neutral", "secondary", "danger"])],
    truncate: [:optional, TrueClass],
    url: [:optional, String],
  })
end
