class SageAlert < SageComponent
  set_attribute_schema(SageConfigs::Alert::SCHEMA.merge({
    desc: [:optional, String],
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
    SageConfigs::Alert::SECTIONS
  end
end
