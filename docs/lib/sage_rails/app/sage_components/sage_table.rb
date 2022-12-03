class SageTable < SageComponent
  set_attribute_schema({
    caption: [:optional, NilClass, String],
    caption_side: [:optional, NilClass, Set.new(["bottom", "top"])],
    condensed: [:optional, NilClass, TrueClass],
    has_borders: [:optional, NilClass, TrueClass],
    has_leading_input: [:optional, NilClass, TrueClass],
    has_menu_options: [:optional, NilClass, TrueClass],
    headers: [:optional, NilClass, Array],
    reset_above: [:optional, NilClass, TrueClass],
    reset_below: [:optional, NilClass, TrueClass],
    responsive: [:optional, NilClass, TrueClass],
    responsive_stack: [:optional, NilClass, TrueClass],
    rows: [:optional, NilClass, Array],
    selectable: [:optional, NilClass, TrueClass],
  })
end
