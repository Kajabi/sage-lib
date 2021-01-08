class SageTabs < SageComponent
  set_attribute_schema({
    style: [:optional, Set.new(["choice"])],
    stacked: [:optional, TrueClass],
    id: [:optional, String],
    items: [[
      text: String,
      attributes: [:optional, Hash],
      active: [:optional, TrueClass],
      target: [:optional, String],
      type: [:optional, Set.new(["radio", "arrow", "icon"])],
      icon: [:optional, String],
    ]],
    progressbar: [:optional, TrueClass],
    align_items_center: [:optional, TrueClass],
    navigational: [:optional, TrueClass],
  })
end
