class SageNav < SageComponent
  set_attribute_schema({
    aria_label: [:optional, NilClass, String],
    items: [:optional, NilClass, [[
      active: [:optional, NilClass, TrueClass],
      attributes: [:optional, NilClass, Hash],
      icon: [:optional, NilClass, String],
      items: [:optional, NilClass, [[
        active: [:optional, NilClass, TrueClass],
        attributes: [:optional, NilClass, Hash],
        icon: [:optional, NilClass, String],
        link: [:optional, NilClass, String],
        method: [:optional, NilClass, Symbol],
        no_active: [:optional, NilClass, TrueClass],
        text: [:optional, NilClass, String],
        type: [:optional, NilClass, String],
      ]]],
      link: [:optional, NilClass, String],
      method: [:optional, NilClass, Symbol],
      no_active: [:optional, NilClass, TrueClass],
      text: [:optional, NilClass, String],
      type: [:optional, NilClass, String],
    ]]]
  })
end
