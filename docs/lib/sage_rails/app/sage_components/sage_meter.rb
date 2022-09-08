class SageMeter < SageComponent
  set_attribute_schema({
    high_value_text: [:optional, NilClass, String],
    id: String,
    label: [:optional, NilClass, String],
    low_value_text: [:optional, NilClass, String],
    max_value: [:optional, NilClass, Integer],
    max_value_text: [:optional, NilClass, String],
    med_value_text: [:optional, NilClass, String],
    optimum_value: [:optional, NilClass, Integer],
    value: [:optional, NilClass, Integer],
  })
end
