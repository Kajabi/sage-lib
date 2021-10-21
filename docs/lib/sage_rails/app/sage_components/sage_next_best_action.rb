class SageNextBestAction < SageComponent
  set_attribute_schema({
    button: [:optional, {
      style: [:optional, NilClass, Set.new(["primary", "secondary", "danger"])],
      text: String
    }],
    card_color: [:optional, SageSchemas::STATUSES],
    description: [:optional, String],
    dismissable: [:optional, TrueClass],
    graphic: [:optional, {
      element: [:optional, String],
      on_right: [:optional, TrueClass],
    }],
    title: [:optional, String],
  })
end
