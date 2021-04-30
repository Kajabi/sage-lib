class SageAlert < SageComponent
  set_attribute_schema({
    color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    dismissable: [:optional, TrueClass],
    icon_name: [:optional, String],
    raised: [:optional, TrueClass],
    title: String,
  })

  def sections
    %w(alert_actions)
  end
end
