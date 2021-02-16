class SageNavLink < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    link: [:optional, String],
    icon: [:optional, String],
    items: [:optional, [[
      active: [:optional, NilClass, TrueClass],
      link: [:optional, String],
      text: [:optional, String],
      type: [:optional, String],
      icon: [:optional, String],
      method: [:optional, Symbol],
      no_active: [:optional, TrueClass],
    ]]],
    method: [:optional, Symbol],
    no_active: [:optional, TrueClass],
    text: [:optional, String],
    type: [:optional, String],
  })
end
