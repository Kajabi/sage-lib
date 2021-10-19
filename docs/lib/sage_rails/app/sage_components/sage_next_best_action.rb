class SageNextBestAction < SageComponent
  set_attribute_schema({
    button: [:optional, {
      style: [:optional, NilClass, Set.new(["primary", "secondary", "danger"])],
      text: String
    }],
    card_color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    dismissable: [:optional, TrueClass],
    graphic: [:optional, {
      element: [:optional, String],
      onRight: [:optional, TrueClass],
    }],
    title: [:optional, String],
  })
end
