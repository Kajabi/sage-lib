class SageTabs < SageComponent
  set_attribute_schema({
    align_items_center: [:optional, TrueClass],
    css_classes: [:optional, String],
    id: [:optional, String],
    items: [:optional, [[
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
    ]]],
    navigational: [:optional, TrueClass],
    progressbar: [:optional, TrueClass],
    stacked: [:optional, TrueClass],
    style: [:optional, Set.new(["choice"])],
  })
end
