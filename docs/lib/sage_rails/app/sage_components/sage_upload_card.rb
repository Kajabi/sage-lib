class SageUploadCard < SageComponent
  set_attribute_schema({
    accepted_files: [:optional, NilClass, [[
      name: [:optional, NilClass, String],
      size: [:optional, NilClass, String],
    ]]],
    errors: [:optional, NilClass, [[
      text: [:optional, NilClass, String],
    ]]],
    file_selected: [:optional, NilClass, TrueClass],
    has_error: [:optional, NilClass, TrueClass],
    id: String,
    name: [:optional, NilClass, String],
    selection_preview: [:optional, NilClass, String],
    selection_label: [:optional, NilClass, String],
    selection_subtext: [:optional, NilClass, String],
    stack_layout:[:optional, NilClass, TrueClass],
  })
  def actions
    %w(upload_card_actions)
  end
end
