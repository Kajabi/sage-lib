class SageDropdown < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new(["right"])],
    css_classes: [:optional, String],
    contained: [:optional, TrueClass],
    content: [:optional, String],
    customized: [:optional, TrueClass],
    custom_modifier: [:optional, Set.new(["actions", "sort"])],
    id: [:optional, String],
    items: [:optional, [[{
      attributes: [:optional, Hash],
      border_before: [:optional, TrueClass],
      icon: [:optional, NilClass, String],
      is_heading: [:optional, TrueClass],
      modifiers: [:optional, Array],
      selected: [:optional, TrueClass],
      style: [:optional, String],
      value: String,
    }]]],
    panel_size: [:optional, Set.new(["small"])],
    search: [:optional, TrueClass],
    trigger_type: [:optional, Set.new(["select", "select-labeled"])],
  })

  def sections
    %w(sage_dropdown_custom_panel_content)
  end

end
