class SageBillboard < SageComponent
  set_attribute_schema({
    img: [:optional, NilClass, String],
    message: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
    title_tag: [:optional, NilClass, String],
  })
end
