class SageAssistant < SageComponent
  set_attribute_schema({
    logo: [:optional, {
      path: String,
      method: [:optional, NilClass, Set.new(["pack"])],
    }],
    menu_button: [:optional, TrueClass],
    menu_button_controls: [:optional, String],
  })

  def sections
    %w(:assistant_actions)
  end
end
