class SageProgressBar < SageComponent
  set_attribute_schema({
    color: [:optional, String],
    label: String,
    percent: 0..100,
  })
end
