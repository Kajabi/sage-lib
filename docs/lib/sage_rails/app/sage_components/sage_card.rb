class SageCard < SageComponent
  set_attribute_schema({
    border_dashed: [:optional, NilClass, TrueClass],
    compact: [:optional, NilClass, TrueClass,],
    clear_bottom_padding: [:optional, NilClass, TrueClass],
    clear_top_padding: [:optional, NilClass, TrueClass],
    interactive: [:optional, NilClass, TrueClass]
  })
end
