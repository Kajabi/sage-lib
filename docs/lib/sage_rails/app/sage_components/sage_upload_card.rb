class SageUploadCard < SageComponent
  set_attribute_schema({
    selection_subtext: [:optional, String],
    selection_label: [:optional, String],
    file_selected: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    accepted_files: [:optional, [[
      name: [:optional, String],
      size: [:optional, String],
    ]]],
    errors: [:optional, [[
      text: [:optional, String],
    ]]],
  })
end
