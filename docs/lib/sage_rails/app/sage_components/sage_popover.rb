class SagePopover < SageComponent
  set_attribute_schema({
    custom_content_class: [:optional, NilClass, String],
    icon: [:optional, NilClass, String, {
      name: Set.new(SageTokens::ICONS),
      style: Set.new(["left", "right", "only"]),
    }],
    id: [:optional, NilClass, String],
    link: [:optional, NilClass, {href: String, name: String}],
    popover_position: [:optional, NilClass, Set.new(SageTokens::POPOVER_POSITIONS)],
    title: [:optional, NilClass, String],
    trigger_icon_only: [:optional, NilClass, TrueClass],
    trigger_value: [:optional, NilClass, String],
  })

  def sections
    %w(popover_media)
  end
end
