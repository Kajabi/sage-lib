class SageDynamicSelect < SageComponent
  set_attribute_schema({
    url: String,
    label: String,
    name: String,
    id: String,
    has_error: [:optional, TrueClass],
    message: [:optional, String],
    default_value: [:optional, String, Integer],
    default_text: [:optional, String],
    paginate: [:optional, TrueClass],
    paginate_size: [:optional, Integer],
    search: [:optional, TrueClass],
    clear: [:optional, TrueClass],
    placeholder: [:optional, String],
    theme: [:optional, String],
    required: [:optional, TrueClass],
  })
end