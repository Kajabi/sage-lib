class SageDropdown < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new(["left", "center", "right"])],
    contained: [:optional, NilClass, TrueClass],
    content: [:optional, String],
    customized: [:optional, NilClass, TrueClass],
    custom_modifier: [:optional, NilClass, Set.new(["actions", "sort"])],
    full_width_panel: [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, String],
    items: [:optional, [[SageSchemas::DROPDOWN_ITEM]]],
    panel_size: [:optional, NilClass, Set.new(["small"])],
    panel_type: [:optional, NilClass, Set.new(["custom", "dropdown", "choice", "checkbox", "status", "searchable"])],
    panel_width: [:optional, NilClass, String],
    search: [:optional, NilClass, TrueClass],
    trigger_type: [:optional, NilClass, Set.new(["select", "select-labeled"])],
    wrap_footer: [:optional, NilClass, TrueClass],
  })

  def sections
    %w(dropdown_custom_panel_content dropdown_custom_panel_footer)
  end
end
