class SageDescription < SageComponent
  set_attribute_schema({
    action_width: [:optional, String],
    no_dividers: [:optional, NilClass, TrueClass],
    items: [:optional, [[NilClass, {
      action: [:optional, NilClass, {
        attributes: [:optional, NilClass, Hash],
        icon_only: [:optional, NilClass, TrueClass],
        test_id: [:optional, NilClass, String],
        value: [:optional, NilClass, String],
      }],
      data: [:optional, NilClass, String, Integer, Hash],
      hide_title: [:optional, NilClass, TrueClass],
      id: [:optional, String],
      title: [:optional, String],
    }]]],
    layout: [:optional, Set.new(["inline", "stacked"])],
    title_width: [:optional, String],
  })
end
