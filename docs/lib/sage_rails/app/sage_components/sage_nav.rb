class SageNav < SageComponent
  set_attribute_schema({
    aria_label: [:optional, String],
    css_classes: [:optional, String],
    items: [:optional, [[
      active: [:optional, NilClass, TrueClass],
      attributes: [:optional, Hash],
      icon: [:optional, String],
      items: [:optional, [[
        active: [:optional, NilClass, TrueClass],
        attributes: [:optional, Hash],
        icon: [:optional, String],
        link: [:optional, String],
        method: [:optional, Symbol],
        no_active: [:optional, TrueClass],
        text: [:optional, String],
        type: [:optional, String],
      ]]],
      link: [:optional, String],
      method: [:optional, Symbol],
      no_active: [:optional, TrueClass],
      text: [:optional, String],
      type: [:optional, String],
    ]]]
  })
end
