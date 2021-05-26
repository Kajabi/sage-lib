class SageStatBox < SageComponent
  set_attribute_schema({
    custom_label: [:optional, NilClass, String],
    change: [:optional, {
      type: Set.new(["positive", "negative", "neutral"]),
      value: String,
    }],
    data: String,
    has_data: [:optional, TrueClass],
    link: [:optional, {
      href: String,
      value: String,
    }],
    timeframe: [:optional, String],
    title: String,
    popover: [:optional, String],
  })
end
