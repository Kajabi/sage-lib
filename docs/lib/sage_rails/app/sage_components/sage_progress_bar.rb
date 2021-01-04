class SageProgressBar < SageComponent
  set_attribute_schema({
    percent: 0..100,
    label: String,
  })
end
