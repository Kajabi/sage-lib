class SageExpandableCard < SageComponent
  set_attribute_schema({
    body_bordered: [:optional, TrueClass],
    sage_type: [:optional, TrueClass],
    trigger_label: [:optional, String],
  })
end

