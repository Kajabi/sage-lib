class SageProgressBar < SageComponent
  set_attribute_schema({
    color: [:optional, String],
    display_percent: [:optional, TrueClass],
    label: String,
    percent: 0..100,
  })
end
