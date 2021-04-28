class SageExpandableCard < SageComponent
  set_attribute_schema({
    body_bordered: [:optional, TrueClass],
    css_classes: [:optional, String],
    sage_type: [:optional, TrueClass],
    trigger_label: [:optional, String],
  })
end

