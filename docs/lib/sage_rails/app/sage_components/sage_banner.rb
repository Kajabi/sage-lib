class SageBanner < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    banner_context: [:optional, NilClass, Set.new(["ladera-top", "sage-demo"])],
    dismissable: [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, String],
    link: [:optional, NilClass, {name: String, attributes: Hash}],
    text: String,
    type: [:optional, NilClass, String],
  })
end
