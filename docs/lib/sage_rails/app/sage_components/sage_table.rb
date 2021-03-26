class SageTable < SageComponent
  set_attribute_schema({
    caption: [:optional, String],
    condensed: [:optional, TrueClass],
    css_classes: [:optional, String],
    headers: [:optional, Array],
    reset_above: [:optional, TrueClass],
    reset_below: [:optional, TrueClass],
    responsive: [:optional, TrueClass],
    rows: [:optional, Array],
    selectable: [:optional, TrueClass],
    sortable: [:optional, TrueClass],
    striped: [:optional, TrueClass],
  })
end
