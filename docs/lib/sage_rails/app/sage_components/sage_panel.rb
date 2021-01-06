class SagePanel < SageComponent
  set_attribute_schema({
    clear_top_padding: [:optional, TrueClass],
    clear_bottom_padding: [:optional, TrueClass],
  })
end
