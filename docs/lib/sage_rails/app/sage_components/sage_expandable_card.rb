class SageExpandableCard < SageComponent
  set_attribute_schema({
    align_arrow_right: [:optional, TrueClass],
    body_bordered: [:optional, TrueClass],
    sage_type: [:optional, TrueClass],
    expanded: [:optional, TrueClass],
    trigger_label: [:optional, String],
  })
end

