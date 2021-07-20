class SageDropdown < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new(["right"])],
    contained: [:optional, TrueClass],
    content: [:optional, String],
    customized: [:optional, TrueClass],
    custom_modifier: [:optional, Set.new(["actions", "sort"])],
    full_width_panel: [:optional, TrueClass],
    id: [:optional, String],
    items: [:optional, [[SageSchemas::DROPDOWN_ITEM]]],
    panel_size: [:optional, Set.new(["small"])],
    search: [:optional, TrueClass],
    trigger_type: [:optional, Set.new(["select", "select-labeled"])],
    wrap_footer: [:optional, TrueClass],
  })

  def sections
    %w(dropdown_custom_panel_content dropdown_custom_panel_footer)
  end
end
