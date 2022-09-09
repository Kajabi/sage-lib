class SagePanel < SageComponent
  set_attribute_schema({
    clear_bottom_padding: [:optional, NilClass, TrueClass],
    clear_top_padding: [:optional, NilClass, TrueClass],
  })
end
