class SageModal < SageComponent
  set_attribute_schema({
    active: [:optional, TrueClass],
    css_classes: [:optional, String],
    disable_close: [:optional, TrueClass],
    id: [:optional, String],
    large: [:optional, TrueClass],
    remove_content_on_close: [:optional, TrueClass],
    disable_background_blur: [:optional, TrueClass],
    animate: [:optional, String, TrueClass, {
      direction: [:optional, String, Set.new(["bottom", "top", "left", "right"])]
    }],
    remote_url: [:optional, String]
  })
end
