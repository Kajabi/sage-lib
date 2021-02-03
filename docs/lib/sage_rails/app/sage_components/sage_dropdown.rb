class SageDropdown < SageComponent
  set_attribute_schema({
    id: [:optional, String],
    align: [:optional, Set.new(["right"])],
    css_classes: [:optional, String],
    contained: [:optional, TrueClass],
    content: [:optional, String],
    customized: [:optional, TrueClass],
    custom_modifier: [:optional, Set.new(["actions", "sort"])],
    items: [:optional, [[{
      value: String,
      icon: [:optional, NilClass, String],
      attributes: [:optional, Hash],
      style: [:optional, String],
      is_heading: [:optional, TrueClass],
      modifiers: [:optional, Array],
      border_before: [:optional, TrueClass],
      selected: [:optional, TrueClass],
    }]]],
    trigger_type: [:optional, Set.new(["select", "select-labeled"])],
    search: [:optional, TrueClass],
    panel_size: [:optional, Set.new(["small"])],
  })
end
