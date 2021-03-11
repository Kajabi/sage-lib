class SageModal < SageComponent
  set_attribute_schema({
    active: [:optional, TrueClass],
    disable_close: [:optional, TrueClass],
    id: [:optional, String],
    large: [:optional, TrueClass],
    remove_content_on_close: [:optional, TrueClass],
    animate: [:optional, TrueClass],
    animate_direction: [:optional, Set.new(["bottom", "top", "left", "right"])],
  })
end
