class SageFormSelect < SageComponent
  set_attribute_schema({
    has_error: [:optional, TrueClass],
    message: [:optional, String],
    multiple: [:optional, TrueClass],
    name: [:optional, String],
    select_options: [:optional, [[{
      text: String,
      value: [:optional, NilClass, String],
    }]]],
  })
end
