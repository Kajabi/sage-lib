class SageAlert < SageComponent
  set_attribute_schema({
    color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    dismissable: [:optional, TrueClass],
    icon_name: [:optional, String],
    title: String,
  })

  def sections
    %w(alert_actions)
  end
end
