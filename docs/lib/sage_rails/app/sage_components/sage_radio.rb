class SageRadio < SageComponent
  set_attribute_schema({
    attributes: [:optional, NilClass, Hash],
    caption: [:optional, NilClass, String],
    checked: [:optional, NilClass, TrueClass],
    disabled: [:optional, NilClass, TrueClass],
    has_border: [:optional, NilClass, TrueClass],
    has_error: [:optional, NilClass, TrueClass],
    id: String,
    label_text: String,
    message: [:optional, NilClass, String],
    name: String,
    required: [:optional, NilClass, TrueClass],
    standalone: [:optional, NilClass, TrueClass],
    value: String,
  })

  def sections
    %w(radio_custom_content)
  end
end
