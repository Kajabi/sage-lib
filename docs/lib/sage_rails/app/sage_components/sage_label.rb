class SageLabel < SageComponent
  set_attribute_schema({
    container_attributes: [:optional, Hash],
    color: [:optional, SageSchemas::STATUSES],
    icon: [:optional, String],
    interactive_type: [:optional, Set.new([:dropdown, :default, :secondary_button])],
    secondary_button: [:optional, String, TrueClass, {
      attributes:       [:optional, NilClass, Hash],
      icon:             [:optional, String],
      value:            [:optional, String],
    }],
    style: [:optional, Set.new(["subtle", "bold"])],
    value: String,
  })
end
