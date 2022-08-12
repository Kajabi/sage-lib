class SageFormSelect < SageComponent
  set_attribute_schema({
    disabled: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    id: [:optional, String],
    label: [:optional, String],
    message: [:optional, String],
    multiple: [:optional, TrueClass],
    name: [:optional, String],
    select_options: [:optional, [[SageSchemas::FORM_SELECT_OPTION, SageSchemas::FORM_SELECT_OPTGROUP]]],
  })
end
