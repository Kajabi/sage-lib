class SageAlert < SageComponent
  set_attribute_schema({
    color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    dismissable: [:optional, TrueClass],
    icon_name: [:optional, String],
    primary_action: [:optional, {
      value: String,
      test_id: [:optional, NilClass, String],
      attributes: [:optional, NilClass, Hash]
    }],
    secondary_actions: [:optional, [[{
      value: String,
      test_id: [:optional, NilClass, String],
      attributes: [:optional, NilClass, Hash]
    }]]],
    small: [:optional, TrueClass],
    title: [:optional, String],
    title_addon: [:optional, String],
  })

  def sections
    %w(alert_actions)
  end
end
