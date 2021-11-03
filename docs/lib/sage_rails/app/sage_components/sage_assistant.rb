class SageAssistant < SageComponent
  set_attribute_schema({
    menu_button: [:optional, TrueClass],
    menu_button_controls: [:optional, String],
  })

  def sections
    %w(:assistant_actions)
  end
end
