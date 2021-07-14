class SageButton < SageComponent
  set_attribute_schema({
    align: [:optional, NilClass, String],
    attributes: [:optional, NilClass, Hash],
    disabled: [:optional, NilClass, TrueClass],
    disableWith: [:optional, NilClass, TrueClass],
    disableWithText: [:optional, NilClass, String],
    custom_content_class: [:optional, NilClass, String],
    full_width: [:optional, NilClass, TrueClass],
    icon: [:optional, { name: String, style: Set.new(["left", "right", "only"]) }],
    no_shadow: [:optional, NilClass, TrueClass],
    raised: [:optional, NilClass, TrueClass],
    small: [:optional, NilClass, TrueClass],
    style: [:optional, NilClass, Set.new(["primary", "secondary", "danger"])],
    subtle: [:optional, NilClass, TrueClass],
    value: [:optional, String],
  })
end
