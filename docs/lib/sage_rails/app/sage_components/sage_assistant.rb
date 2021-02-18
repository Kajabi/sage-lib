class SageAssistant < SageComponent
  set_attribute_schema({
    menu_button: [:optional, TrueClass],
    menu_button_controls: [:optional, String],
    logo: [:optional, {
      path: String,
      method: [:optional, NilClass, Set.new(["pack"])],
    }]
  })
end
