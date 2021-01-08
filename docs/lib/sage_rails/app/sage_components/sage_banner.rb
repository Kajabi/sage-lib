class SageBanner < SageComponent
  set_attribute_schema({
    banner_context: [:optional, Set.new(["ladera-top", "sage-demo"])],
    dismissable: [:optional, TrueClass],
    type: [:optional, String],
    icon: [:optional, String],
    text: String,
    link: [:optional, {name: String, attributes: Hash}],
    id: [:optional, String],
    active: [:optional, TrueClass],
  })
end
