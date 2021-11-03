class SageBranding < SageComponent
  set_attribute_schema({
    image: [:optional, {alt: [:optional, String], src: String}],
    url: [:optional, String],
    size: [:optional, String],
  })
end
