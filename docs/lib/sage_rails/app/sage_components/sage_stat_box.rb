class SageStatBox < SageComponent
  set_attribute_schema({
    button: [:optional, {
      disabled: [:optional, TrueClass],
      value: String,
      button_attributes: [:optional, NilClass, Hash],
    }],
    custom_label: [:optional, NilClass, String],
    change: [:optional, {
      type: Set.new(["positive", "negative", "neutral"]),
      value: String
    }],
    data: String,
    has_data: [:optional, TrueClass],
    icon: [:optional, {
      card_color: [:optional, SageSchemas::STATUSES],
      color: [:optional, SageSchemas::COLOR_SLIDER],
      name: SageSchemas::ICON,
    }],
    image: [:optional, {
      alt: [:optional, String],
      src: String
    }],
    legend_dot_color: [:optional, SageSchemas::COLORS],
    legend_dot_custom_color: [:optional, String],
    raised: [:optional, TrueClass],
    timeframe: [:optional, String],
    title: String,
    popover: [:optional, String]
  })
end
