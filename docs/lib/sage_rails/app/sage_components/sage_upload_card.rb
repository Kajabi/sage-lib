class SageUploadCard < SageComponent
  set_attribute_schema({
    accepted_files: [:optional, [[
      name: [:optional, String],
      size: [:optional, String],
    ]]],
    errors: [:optional, [[
      text: [:optional, String],
    ]]],
    file_selected: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    selection_label: [:optional, String],
    selection_subtext: [:optional, String],
  })
end
