class SageStatBox < SageComponent
  set_attribute_schema({
    custom_label: [:optional, NilClass, String],
    change: [:optional, {
      type: Set.new(["positive", "negative", "neutral"]),
      value: String
    }],
    data: String,
    has_data: [:optional, TrueClass],
    image: [:optional, {
      alt: [:optional, String],
      src: String
    }],
    legend_dot_color: [:optional, SageSchemas::COLORS],
    legend_dot_custom_color: [:optional, String],
    link: [:optional, {
      href: String,
      value: String
    }],
    raised: [:optional, TrueClass],
    timeframe: [:optional, String],
    title: String,
    popover: [:optional, String]
  })
end
