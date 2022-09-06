class SageLabel < SageComponent
  set_attribute_schema({
    container_attributes: [:optional, NilClass, Hash],
    color: [:optional, NilClass, SageSchemas::STATUSES],
    custom_icon_color: [:optional, NilClass, String],
    icon: [:optional, NilClass, String],
    interactive_type: [:optional, NilClass, Set.new([:dropdown, :default, :secondary_button])],
    secondary_button: [:optional, NilClass, String, TrueClass, {
      attributes:       [:optional, NilClass, Hash],
      icon:             [:optional, NilClass, String],
      value:            [:optional, NilClass, String],
    }],
    style: [:optional, NilClass, Set.new(["subtle", "bold"])],
    value: String,
  })
end
