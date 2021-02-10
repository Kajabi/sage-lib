class SageExpandableCard < SageComponent
  set_attribute_schema({
    trigger_label: [:optional, String],
    body_bordered: [:optional, TrueClass],
  })
end

