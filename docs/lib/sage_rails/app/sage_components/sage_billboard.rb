class SageBillboard < SageComponent
  set_attribute_schema({
    img: [:optional, String],
    title: [:optional, String],
    message: [:optional, String],
  })
end
