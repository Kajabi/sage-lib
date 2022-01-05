class SageCreationWizard < SageComponent
  set_attribute_schema({
    show_close: [:optional, TrueClass],
  })
  def sections
    %w(creation_wizard_header creation_wizard_body creation_wizard_body_actions creation_wizard_feature)
  end
end
