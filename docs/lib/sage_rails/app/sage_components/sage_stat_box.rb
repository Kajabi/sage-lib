class SageStatBox < SageComponent
  set_attribute_schema({
    custom_label: [:optional, NilClass, String],
    change: [:optional, {
      icon: String,
      type: Set.new(["positive", "negative", "neutral"]),
      value: String,
    }],
    data: String,
    link: [:optional, {
      href: String,
      value: String,
    }],
    timeframe: [:optional, String],
    title: String,
    popover: [:optional, String],
  })
end
