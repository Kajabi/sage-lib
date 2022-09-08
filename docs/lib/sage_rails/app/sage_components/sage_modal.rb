class SageModal < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    allow_scroll: [:optional, NilClass, TrueClass],
    animate: [:optional, NilClass, String, TrueClass, {
      direction: [:optional, NilClass, String, Set.new(["bottom", "top", "left", "right"])]
    }],
    disable_background_blur: [:optional, NilClass, TrueClass],
    disable_background_dismiss: [:optional, NilClass, TrueClass],
    disable_close: [:optional, NilClass, TrueClass],
    fullscreen: [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, String],
    large: [:optional, NilClass, TrueClass],
    remove_content_on_close: [:optional, NilClass, TrueClass],
    remote_url: [:optional, NilClass, String],
    size: [:optional, NilClass, Set.new(SageTokens::CONTAINER_SIZES)]
  })
end
