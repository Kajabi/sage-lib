class SageDrawer < SageComponent
  set_attribute_schema({
    active: [:optional, TrueClass],
    disable_close: [:optional, TrueClass],
    id: [:optional, String],
    full: [:optional, TrueClass],
    remove_content_on_close: [:optional, TrueClass],
    animate: [:optional, String, TrueClass, {
      direction: [:optional, String, Set.new(["left"])]
    }],
    remote_url: [:optional, String]
  })
end
