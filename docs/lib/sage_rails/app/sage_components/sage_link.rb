class SageLink < SageComponent
  set_attribute_schema({
    external: [:optional, TrueClass],
    help_link: [:optional, TrueClass],
    label: [:optional, String],
    launch: [:optional, TrueClass],
    show_label: [:optional, TrueClass],
    truncate: [:optional, TrueClass],
    url: [:optional, String],
  })
end
