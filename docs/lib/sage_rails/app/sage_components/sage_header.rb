class SageHeader < SageComponent
  set_attribute_schema({
    branding: [{
      text: String,
      hide_text: [:optional, TrueClass],
      logo: [:optional, {
        path: String,
        method: [:optional, NilClass, Set.new(["pack"])],
      }]
    }],
    center_body: [:optional, TrueClass],
    menu_button_controls: [:optional, NilClass, String],
  })
end
