class SageNavLink < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    attributes: [:optional, Hash],
    css_classes: [:optional, String],
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
  })
end
