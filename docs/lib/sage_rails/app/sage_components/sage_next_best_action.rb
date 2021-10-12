class SageNextBestAction < SageComponent
  set_attribute_schema({
    button_style: [:optional, NilClass, Set.new(["primary", "secondary", "danger"])],
    button_text: [:optional, String],
    card_color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    title: [:optional, String],
  })
end
