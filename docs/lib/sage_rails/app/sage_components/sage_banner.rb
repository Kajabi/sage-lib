class SageBanner < SageComponent
  set_attribute_schema({
    active: [:optional, TrueClass],
    banner_context: [:optional, Set.new(["ladera-top", "sage-demo"])],
    dismissable: [:optional, TrueClass],
    id: [:optional, String],
    link: [:optional, {name: String, attributes: Hash}],
    text: String,
    type: [:optional, String],
  })
end
