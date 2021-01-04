class SageAlert < SageComponent
  set_attribute_schema({
    color: Set.new([:info, :success, :warning, :danger]),
    desc: String,
    dismissable: [:optional, TrueClass],
    icon_name: String,
    raised: [:optional, TrueClass],
    title: String,
  })

  def sections
    %w(alert_actions)
  end
end
