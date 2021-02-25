class SageLink < SageComponent
  set_attribute_schema({
    attributes: [:optional, NilClass, Hash],
    external: [:optional, TrueClass],
    help_link: [:optional, TrueClass],
    label: [:optional, String],
    launch: [:optional, TrueClass],
    show_label: [:optional, TrueClass],
    url: [:optional, String],
  })
end
