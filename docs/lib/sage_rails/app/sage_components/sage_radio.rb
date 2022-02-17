class SageRadio < SageComponent
  set_attribute_schema({
    attributes: [:optional, Hash],
    caption: [:optional, String],
    checked: [:optional, TrueClass],
    disabled: [:optional, TrueClass],
    has_border: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    id: String,
    label_text: String,
    message: [:optional, String],
    name: String,
    required: [:optional, TrueClass],
    standalone: [:optional, TrueClass],
    value: String,
  })

  def sections
    %w(radio_custom_content)
  end
end
