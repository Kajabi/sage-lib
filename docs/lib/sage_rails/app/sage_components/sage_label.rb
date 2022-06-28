class SageLabel < SageComponent
  set_attribute_schema({
    container_attributes: [:optional, NilClass, Hash],
    color: [:optional, NilClass, SageSchemas::STATUSES],
    custom_icon_color: [:optional, String],
    icon: [:optional, String],
    interactive_type: [:optional, NilClass, Set.new([:dropdown, :default, :secondary_button])],
    secondary_button: [:optional, String, TrueClass, {
      attributes:       [:optional, NilClass, Hash],
      icon:             [:optional, String],
      value:            [:optional, String],
    }],
    style: [:optional, Set.new(["subtle", "bold"])],
    value: String,
  })
end
