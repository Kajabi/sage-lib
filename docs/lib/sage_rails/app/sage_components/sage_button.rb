class SageButton < SageComponent
  set_attribute_schema({
    align: [:optional, NilClass, String],
    attributes: [:optional, NilClass, Hash],
    custom_content_class: [:optional, NilClass, String],
    disabled: [:optional, NilClass, TrueClass],
    disable_on_submit: [:optional, NilClass, String],
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
