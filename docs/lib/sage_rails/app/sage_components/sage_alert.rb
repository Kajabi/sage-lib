class SageAlert < SageComponent
  set_attribute_schema({
    color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    dismissable: [:optional, TrueClass],
    icon_name: [:optional, String],
    primary_action: [:optional, TrueClass, {
      value: [:optional, String],
      url: [:optional, String],
    }],
    secondary_action: [:optional, TrueClass, {
      value: [:optional, String],
      url: [:optional, String],
    }],
    title: String,
  })

  def sections
    %w(alert_actions)
  end
end
