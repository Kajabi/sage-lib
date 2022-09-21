class SageAlert < SageComponent
  set_attribute_schema({
    color: [:optional, NilClass, Set.new([
      "default",
      "info",
      "published",
      "success",
      "warning",
      "approaching",
      "reached",
      "exceeded",
      "danger",
    ])],
    desc: [:optional, NilClass, String],
    dismissable: [:optional, NilClass, TrueClass],
    icon_name: [:optional, NilClass, String, Set.new(SageTokens::ICONS)],
    primary_action: [:optional, NilClass, {
      value: String,
      test_id: [:optional, NilClass, String],
      attributes: [:optional, NilClass, Hash]
    }],
    secondary_actions: [:optional, [[NilClass, {
      value: String,
      url: [:optional, NilClass, String],
      test_id: [:optional, NilClass, String],
      attributes: [:optional, NilClass, Hash],
    }]]],
    small: [:optional, NilClass, TrueClass],
    title: [:optional, NilClass, String],
    title_addon: [:optional, NilClass, String],
  })

  def sections
    %w(alert_actions)
  end
end
