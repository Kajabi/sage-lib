class SageStatBox < SageComponent
  set_attribute_schema({
    custom_label: [:optional, NilClass, String],
    data: Integer,
    change: [:optional, {
      type: Set.new(["up", "down", "neutral"]),
      value: String,
    }],
    link: [:optional, {
      href: String,
      value: String,
    }],
    timeframe: [:optional, String],
    title: String,
    popover: [:optional, String],
  })
end
