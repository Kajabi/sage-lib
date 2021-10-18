class SageNextBestAction < SageComponent
  set_attribute_schema({
    button: [:optional, {
      style: [:optional, NilClass, Set.new(["primary", "secondary", "danger"])],
      text: String
    }],
    card_color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    dismissable: [:optional, TrueClass],
    image: [:optional, {
      alt: [:optional, String],
      onRight: [:optional, TrueClass],
      src: String
    }],
    title: [:optional, String],
  })
end
