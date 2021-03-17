class SageFormSelect < SageComponent
  set_attribute_schema({
    has_error: [:optional, TrueClass],
    message: [:optional, String],
    name: [:optional, String],
    css_classes: [:optional, String],
    select_options: [:optional, [[{
      text: String,
      value: [:optional, NilClass, String],
    }]]],
  })
end
