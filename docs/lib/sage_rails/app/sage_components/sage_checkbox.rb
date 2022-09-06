class SageCheckbox < SageComponent
  set_attribute_schema({
    attributes: [:optional, NilClass, Hash],
    checked: [:optional, NilClass, TrueClass],
    disabled: [:optional, NilClass, TrueClass],
    has_error:  [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, String],
    label_text: [:optional, NilClass, String],
    message: [:optional, NilClass, String],
    name: [:optional, NilClass, String],
    partial_selection: [:optional, NilClass, TrueClass],
    required: [:optional, NilClass, TrueClass],
    standalone:  [:optional, NilClass, TrueClass],
    value: [:optional, NilClass, String],
  })

  def sections
    %w(checkbox_custom_content)
  end
end
