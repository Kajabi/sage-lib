class SageBillboard < SageComponent
  set_attribute_schema({
    img: [:optional, String],
    message: [:optional, String],
    title: [:optional, String],
    title_tag: [:optional, String],
  })
end
