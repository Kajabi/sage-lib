class SageTabs < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    style: [:optional, Set.new(["choice"])],
    stacked: [:optional, TrueClass],
    id: [:optional, String],
    items: [[
      active: [:optional, NilClass, TrueClass],
      align_center: [:optional, TrueClass],
      attributes: [:optional, NilClass, Hash],
      data: [:optional, Hash],
      disabled: [:optional, NilClass, TrueClass],
      graphic: [:optional, NilClass, String],
      icon: [:optional,NilClass, String],
      link_text: [:optional, NilClass, String],
      subtext: [:optional, NilClass, String],
      target: [:optional, NilClass, String],
      text: [:optional, NilClass, String],
      type: [:optional, Set.new(["arrow", "graphic", "icon", "radio"])]
    ]],
    progressbar: [:optional, TrueClass],
    align_items_center: [:optional, TrueClass],
    navigational: [:optional, TrueClass],
  })
end
