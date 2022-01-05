class SageCreationWizard < SageComponent
  set_attribute_schema({
    indicator_current_item: [:optional, Integer],
    indicator_label: [:optional, String],
    indicator_num_items: [:optional, Integer],
    show_close: [:optional, TrueClass],
  })
  def sections
    %w(creation_wizard_body creation_wizard_body_actions creation_wizard_header creation_wizard_header_indicator creation_wizard_feature)
  end
end
