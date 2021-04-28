class SageMeter < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    high_value_text: [:optional, String],
    id: String,
    label: [:optional, String],
    low_value_text: [:optional, String],
    max_value: [:optional, Integer],
    max_value_text: [:optional, String],
    med_value_text: [:optional, String],
    optimum_value: [:optional, Integer],
    value: [:optional, Integer],
  })
end
