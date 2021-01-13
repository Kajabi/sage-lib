class SageTabs < SageComponent
  set_attribute_schema({
    style: [:optional, Set.new(["choice"])],
    stacked: [:optional, TrueClass],
    id: [:optional, String],
    items: [[
      active: [:optional, NilClass, TrueClass],
      align_center: [:optional, TrueClass],
      attributes: [:optional, NilClass, Hash],
      data: [:optional, Hash],
      disabled: [:optional, NilClass, TrueClass],
      icon: [:optional,NilClass, String],
      subtext: [:optional, NilClass, String],
      target: [:optional, NilClass, String],
      text: String,
      type: Set.new(["icon", "radio", "arrow"]),
    ]],
    progressbar: [:optional, TrueClass],
    align_items_center: [:optional, TrueClass],
    navigational: [:optional, TrueClass],
  })
end
