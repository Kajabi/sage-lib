class SageDropdown < SageComponent
  set_attribute_schema(SageSchemas::DROPDOWN)

  def sections
    %w(dropdown_custom_panel_content dropdown_custom_panel_footer dropdown_items)
  end
end
