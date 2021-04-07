class SageLabel < SageComponent
  set_attribute_schema({
    container_attributes: [:optional, Hash],
    color: Set.new(["danger", "draft", "info", "locked", "published", "success", "warning"]),
    icon: [:optional, String],
    interactive_type: [:optional, Set.new([:dropdown, :default, :secondary_button])],
    secondary_button: [:optional, String, TrueClass, {
      attributes:       [:optional, NilClass, Hash],
      css_classes:      [:optional, String],
      icon:             [:optional, String],
      value:            [:optional, String],
    }],
    style: [:optional, Set.new(["subtle", "bold"])],
    value: String,
  })
end
