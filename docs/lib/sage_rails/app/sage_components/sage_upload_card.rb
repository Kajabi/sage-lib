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
    selection_label: [:optional, NilClass, String],
    selection_subtext: [:optional, NilClass, String],
  })
end
