class SageTable < SageComponent
  set_attribute_schema({
    caption: [:optional, String],
    caption_side: [:optional, Set.new(["bottom", "top"])],
    condensed: [:optional, TrueClass],
    has_borders: [:optional, TrueClass],
    headers: [:optional, Array],
    reset_above: [:optional, TrueClass],
    reset_below: [:optional, TrueClass],
    responsive: [:optional, TrueClass],
    rows: [:optional, Array],
    selectable: [:optional, TrueClass],
  })
end
