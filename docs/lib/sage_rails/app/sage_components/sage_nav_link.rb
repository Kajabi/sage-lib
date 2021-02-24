class SageNavLink < SageComponent
  set_attribute_schema({
    icon: [:optional, String],
    link: [:optional, String],
    method: [:optional, Symbol],
    no_active: [:optional, TrueClass],
    text: [:optional, String],
    type: [:optional, String],
  })
end
