class SageAssistant < SageComponent
  set_attribute_schema({
    logo: [:optional, NilClass, {
      path: String,
      method: [:optional, NilClass, Set.new(["pack"])],
    }],
    menu_button: [:optional, NilClass, TrueClass],
    menu_button_controls: [:optional, NilClass, String],
  })

  def sections
    %w(:assistant_actions)
  end
end
