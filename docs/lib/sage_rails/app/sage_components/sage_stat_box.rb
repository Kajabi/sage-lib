class SageStatBox < SageComponent
  set_attribute_schema({
    label_color: [:optional, Set.new(["danger", "info", "warning"])],
    label_icon: [:optional, String],
    label_text: [:optional, String],
    status: String,
    timeframe: [:optional, String],
  })
end
