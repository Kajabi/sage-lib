class SageCreationWizard < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    header_image: [:optional, String],
    id: [:optional, NilClass, String],
    indicator: [:optional, {
      current_item: [:optional, Integer],
      label: [:optional, String],
      num_items: [:optional, Integer],
    }],
    show_close: [:optional, TrueClass],
    title: [:optional, String],
  })
  def sections
    %w(creation_wizard_body creation_wizard_body_actions creation_wizard_header creation_wizard_header_indicator creation_wizard_feature)
  end
end
