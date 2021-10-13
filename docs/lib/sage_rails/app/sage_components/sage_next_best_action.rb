class SageNextBestAction < SageComponent
  set_attribute_schema({
    button: [:optional, {
      style: [:optional, NilClass, Set.new(["primary", "secondary", "danger"])],
      text: String
    }],
    card_color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    image: [:optional, {
      alt: [:optional, String],
      src: String
    }],
    title: [:optional, String],
  })
end
