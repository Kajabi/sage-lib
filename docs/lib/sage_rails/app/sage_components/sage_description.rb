class SageDescription < SageComponent
  set_attribute_schema({
    action_width: [:optional, String],
    id: [:optional, String],
    items: [:optional, [[{
      data: [:optional, NilClass, String, Integer, Hash],
      title: [:optional, String],
      action: [:optional, {
        attributes: [:optional, NilClass, Hash],
        icon_only: [:optional, TrueClass],
        test_id: [:optional, NilClass, String],
        value: String,
      }],
    }]]],
    layout: [:optional, Set.new(["inline", "stacked"])],
    title_width: [:optional, String],
  })
end
