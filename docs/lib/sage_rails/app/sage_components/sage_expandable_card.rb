class SageExpandableCard < SageComponent
  set_attribute_schema({
    align_arrow_right: [:optional, NilClass, TrueClass],
    body_bordered: [:optional, NilClass, TrueClass],
    sage_type: [:optional, NilClass, TrueClass],
    expanded: [:optional, NilClass, TrueClass],
    trigger_label: [:optional, NilClass, String],
  })
end

