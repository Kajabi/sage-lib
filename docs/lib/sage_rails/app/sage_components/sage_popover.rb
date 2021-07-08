class SagePopover < SageComponent
  set_attribute_schema({
    body: [:optional, String],
    custom_content_class: [:optional, String],
    icon: [:optional, String, {
      name: Set.new(SageTokens::ICONS),
      style: Set.new(["left", "right", "only"]),
    }],
    id: [:optional, String],
    link: [:optional, {href: String, name: String}],
    popover_position: [:optional, Set.new(SageTokens::POPOVER_POSITIONS)],
    title: [:optional, String],
    trigger_icon_only: [:optional, TrueClass],
    trigger_value: [:optional, String],
  })
end
