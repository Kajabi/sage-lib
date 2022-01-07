class SageModal < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    animate: [:optional, String, TrueClass, {
      direction: [:optional, String, Set.new(["bottom", "top", "left", "right"])]
    }],
    disable_background_blur: [:optional, TrueClass],
    disable_background_dismiss: [:optional, NilClass, TrueClass],
    disable_close: [:optional, TrueClass],
    fullscreen: [:optional, TrueClass],
    id: [:optional, NilClass, String],
    large: [:optional, TrueClass],
    remove_content_on_close: [:optional, TrueClass],
    remote_url: [:optional, String]
  })
end
