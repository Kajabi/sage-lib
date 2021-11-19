class SageDescription < SageComponent
  # TODO: simplify to items only (remove data, link, title from root)
  # once instances are converted to the lists format.
  set_attribute_schema({
    action_width: [:optional, String],
    id: [:optional, String],
    inline_spread: [:optional, TrueClass],
    items: [:optional, [[{
      data: [:optional, NilClass, String, Integer, Hash],
      link: [:optional, String],
      title: [:optional, String],
    }]]],
    layout: [:optional, Set.new(["inline", "stacked"])],
    primary_action: [:optional, {
      attributes: [:optional, NilClass, Hash],
      icon_only: [:optional, TrueClass],
      test_id: [:optional, NilClass, String],
      value: String,
    }],
    title_width: [:optional, String],
  })
end
