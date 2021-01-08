class SageLabel < SageComponent
  set_attribute_schema({
    color: Set.new(["danger", "draft", "info", "locked", "published", "success", "warning"]),
    html_tag: [:optional, String],
    icon: [:optional, String],
    interactive_type: [:optional, Set.new([:dropdown, :default, :secondary_button])],
    secondary_button: [:optional, String],
    style: [:optional, Set.new(["subtle", "bold"])],
    value: String,
  })
end
