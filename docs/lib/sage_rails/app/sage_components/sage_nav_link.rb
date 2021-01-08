class SageNavLink < SageComponent
  set_attribute_schema({
    link: [:optional, String],
    text: [:optional, String],
    type: [:optional, String],
    icon: [:optional, String],
    no_active: [:optional, TrueClass],
    method: [:optional, Symbol],
  })
end
