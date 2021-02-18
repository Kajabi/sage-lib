class SageAssistant < SageComponent
  set_attribute_schema({
    menu_button: [:optional, TrueClass],
    logo: [:optional, {
      path: String,
      logo_method: [:optional, NilClass, Set.new(["pack"])],
    }]
  })
end
