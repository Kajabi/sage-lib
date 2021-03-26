class SageBanner < SageComponent
  set_attribute_schema({
    active: [:optional, TrueClass],
    banner_context: [:optional, Set.new(["ladera-top", "sage-demo"])],
    css_classes: [:optional, String],
    dismissable: [:optional, TrueClass],
    icon: [:optional, String],
    id: [:optional, String],
    link: [:optional, {name: String, attributes: Hash}],
    text: String,
    type: [:optional, String],
  })
end
