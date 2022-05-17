class SageProgressBar < SageComponent
  set_attribute_schema({
    background_color: [:optional, String],
    color: [:optional, String],
    disable_tooltip: [:optional, TrueClass],
    display_percent: [:optional, TrueClass],
    label: String,
    percent: 0..100,
    tooltip_position: [:optional, Set.new(["top", "bottom"])]
  })
end
