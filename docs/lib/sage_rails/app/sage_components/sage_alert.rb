class SageAlert < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    color: [:optional, Set.new(["info", "success", "warning", "danger"])],
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
