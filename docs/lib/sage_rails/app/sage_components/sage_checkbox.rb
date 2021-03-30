class SageCheckbox < SageComponent
  set_attribute_schema({
    attributes: [:optional, Hash],
    checked: [:optional, TrueClass],
    css_classes: [:optional, String],
    disabled: [:optional, TrueClass],
    has_error:  [:optional, TrueClass],
    id: [:optional, String],
    label_text: [:optional, String],
    message: [:optional, String],
    name: [:optional, String],
    partial_selection: [:optional, TrueClass],
    required: [:optional, TrueClass],
    standalone:  [:optional, TrueClass],
    value: [:optional, String],
  })
end
