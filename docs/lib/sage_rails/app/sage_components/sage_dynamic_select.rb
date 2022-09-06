class SageDynamicSelect < SageComponent
  set_attribute_schema({
    url: String,
    label: String,
    name: String,
    id: String,
    has_error: [:optional, NilClass, TrueClass],
    message: [:optional, NilClass, String],
    default_value: [:optional, NilClass, String, Integer],
    default_text: [:optional, NilClass, String],
    paginate: [:optional, NilClass, TrueClass],
    paginate_size: [:optional, NilClass, Integer],
    search: [:optional, NilClass, TrueClass],
    clear: [:optional, NilClass, TrueClass],
    placeholder: [:optional, NilClass, String],
    theme: [:optional, NilClass, String],
    required: [:optional, NilClass, TrueClass],
  })
end
