class SageStatBox < SageComponent
  set_attribute_schema({
    custom_label: [:optional, NilClass, String],
    change: [:optional, NilClass, {
      type: Set.new(["positive", "negative", "neutral"]),
      value: String
    }],
    data: String,
    has_data: [:optional, NilClass, TrueClass],
    icon: [:optional, NilClass, {
      card_color: [:optional, NilClass, SageSchemas::STATUSES],
      color: [:optional, NilClass, SageSchemas::COLOR_SLIDER],
      name: SageSchemas::ICON,
    }],
    image: [:optional, NilClass, {
      alt: [:optional, NilClass, String],
      src: String
    }],
    legend_dot_color: [:optional, NilClass, SageSchemas::COLORS],
    legend_dot_custom_color: [:optional, NilClass, String],
    link: [:optional, NilClass, {
      href: String,
      value: String
    }],
    raised: [:optional, NilClass, TrueClass],
    timeframe: [:optional, NilClass, String],
    title: String,
    popover: [:optional, NilClass, String]
  })
end
