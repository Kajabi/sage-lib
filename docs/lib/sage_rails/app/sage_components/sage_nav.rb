class SageNav < SageComponent
  set_attribute_schema({
    aria_label: [:optional, String],
    items: [:optional, [[
      active: [:optional, TrueClass],
      link: [:optional, String],
      text: [:optional, String],
      type: [:optional, String],
      icon: [:optional, String],
      no_active: [:optional, TrueClass],
      method: [:optional, Symbol],
      items: [:optional, [[
        active: [:optional, TrueClass],
        link: [:optional, String],
        text: [:optional, String],
        type: [:optional, String],
        icon: [:optional, String],
        no_active: [:optional, TrueClass],
        method: [:optional, Symbol],
      ]]],
    ]]]
  })
end
