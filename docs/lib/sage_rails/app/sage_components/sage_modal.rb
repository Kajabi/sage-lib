class SageModal < SageComponent
  set_attribute_schema({
    drawer: [:optional, NilClass, TrueClass],
    active: [:optional, TrueClass],
    disable_close: [:optional, TrueClass],
    id: [:optional, String],
    fullscreen: [:optional, TrueClass],
    large: [:optional, TrueClass],
    remove_content_on_close: [:optional, TrueClass],
    disable_background_blur: [:optional, TrueClass],
    animate: [:optional, String, TrueClass, {
      direction: [:optional, String, Set.new(["bottom", "top", "left", "right"])]
    }],
    remote_url: [:optional, String]
  })
end
