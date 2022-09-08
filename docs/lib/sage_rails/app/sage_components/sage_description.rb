class SageDescription < SageComponent
  set_attribute_schema({
    action_width: [:optional, NilClass, String],
    no_dividers: [:optional, NilClass, TrueClass],
    items: [:optional, [[NilClass, {
      action: [:optional, NilClass, {
        attributes: [:optional, NilClass, Hash],
        test_id: [:optional, NilClass, String],
        value: [:optional, NilClass, String],
      }],
      data: [:optional, NilClass, String, Integer, Hash],
      hide_title: [:optional, NilClass, TrueClass],
      id: [:optional, NilClass, String],
      title: [:optional, NilClass, String],
    }]]],
    layout: [:optional, NilClass, Set.new(["inline", "stacked"])],
    title_width: [:optional, NilClass, String],
  })
end
