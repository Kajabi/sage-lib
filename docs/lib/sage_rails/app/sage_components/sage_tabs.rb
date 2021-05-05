class SageTabs < SageComponent
  set_attribute_schema({
    align_items_center: [:optional, TrueClass],
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
      type: [:optional, Set.new(["arrow", "graphic", "icon", "radio"])],
      vertical_align_icon: [:optional, NilClass, Set.new(["start"])],
      radio_configs: [:optional, NilClass, {
        value: String,
        name: String,
        id: String,
      }]
    ]]],
    navigational: [:optional, TrueClass],
    progressbar: [:optional, TrueClass],
    stacked: [:optional, TrueClass],
    style: [:optional, Set.new(["choice"])],
  })
end
