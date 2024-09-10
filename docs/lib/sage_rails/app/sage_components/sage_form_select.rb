class SageFormSelect < SageComponent
  set_attribute_schema({
    disabled: [:optional, NilClass, TrueClass],
    has_error: [:optional, NilClass, TrueClass],
    help_content: [:optional, NilClass, String],
    id: [:optional, NilClass, String],
    label: [:optional, NilClass, String],
    message: [:optional, NilClass, String],
    multiple: [:optional, NilClass, TrueClass],
    name: [:optional, NilClass, String],
    select_options: [:optional, NilClass, [[SageSchemas::FORM_SELECT_OPTION, SageSchemas::FORM_SELECT_OPTGROUP]]],
  })
end
