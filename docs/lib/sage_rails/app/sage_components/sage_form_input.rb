class SageFormInput < SageComponent
  set_attribute_schema({
    autocomplete: [:optional, NilClass, String],
    disabled: [:optional, NilClass, TrueClass],
    has_error: [:optional, NilClass, TrueClass],
    has_placeholder: [:optional, NilClass, TrueClass],
    hide_label: [:optional, NilClass, TrueClass],
    icon: [:optional, NilClass, SageSchemas::ICON],
    id: String,
    input_mode: [:optional, NilClass, String],
    input_type: [:optional, NilClass, String],
    label_text: [:optional, NilClass, String],
    max: [:optional, NilClass, String],
    maxlength: [:optional, NilClass, String],
    message_text: [:optional, NilClass, String],
    min: [:optional, NilClass, String],
    minlength: [:optional, NilClass, String],
    name: [:optional, NilClass, String],
    pattern: [:optional, NilClass, String],
    placeholder: [:optional, NilClass, String],
    prefix: [:optional, NilClass, String],
    readonly: [:optional, NilClass, TrueClass],
    required: [:optional, NilClass, TrueClass],
    step: [:optional, NilClass, String],
    suffix: [:optional, NilClass, String],
    value: [:optional, NilClass, String]
  })

  def sections
    %w(form_input_popover)
  end
end
