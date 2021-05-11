class SageStatBox < SageComponent
  set_attribute_schema({
    custom_label: [:optional, NilClass, String],
    change: [:optional, {
      type: Set.new(["up", "down", "neutral"]),
      value: String,
    }],
    data: Integer,
    link: [:optional, {
      href: String,
      value: String,
    }],
    timeframe: [:optional, String],
    title: String,
    popover: [:optional, String],
  })
end
