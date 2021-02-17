class SageModal < SageComponent
  set_attribute_schema({
    id: [:optional, String],
    active: [:optional, TrueClass],
    disable_close: [:optional, TrueClass],
    large: [:optional, TrueClass],
    remove_content_on_close: [:optional, TrueClass],
  })
end
