class SageCard < SageComponent
  set_attribute_schema({
    border_dashed: [:optional, TrueClass],
    clear_bottom_padding: [:optional, TrueClass],
    clear_top_padding: [:optional, TrueClass],
  })
end
