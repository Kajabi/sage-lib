class SageProgressBar < SageComponent
  set_attribute_schema({
    background_color: [:optional, NilClass, String],
    color: [:optional, NilClass, String],
    disable_tooltip: [:optional, NilClass, TrueClass],
    display_percent: [:optional, NilClass, TrueClass],
    animate: [:optional, NilClass, TrueClass],
    label: String,
    percent: 0..100,
    tooltip_position: [:optional, NilClass, Set.new(["top", "bottom"])]
  })
end
