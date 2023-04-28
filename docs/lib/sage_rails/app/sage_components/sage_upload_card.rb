class SageUploadCard < SageComponent
  set_attribute_schema({
    accepted_files: [:optional, NilClass, [[
      name: [:optional, NilClass, String],
      size: [:optional, NilClass, String],
    ]]],
    accepted_file_types: [:optional, NilClass, Array],
    custom_file_input_field: [:optional, NilClass, TrueClass],
    errors: [:optional, NilClass, [[
      text: [:optional, NilClass, String],
    ]]],
    file_selected: [:optional, NilClass, TrueClass],
    has_error: [:optional, NilClass, TrueClass],
    id: String,
    name: [:optional, NilClass, String],
    selection_preview: [:optional, NilClass, String],
    selection_label: [:optional, NilClass, String],
    stack_layout:[:optional, NilClass, TrueClass],
  })
  def instructions
    %w(upload_card_instructions)
  end
  def image
    %w(upload_card_preview)
  end
  def actions
    %w(upload_card_actions)
  end
end
