class SageStatBox < SageComponent
  set_attribute_schema({
    custom_label: [:optional, NilClass, SageSchemas::LABEL],
    data: Integer,
    change_type: [:optional, Set.new(["up", "down", "neutral"])],
    change_value: [:optional, String],
    link_href: [:optional, String],
    link_value: [:optional, String],
    status: String,
    timeframe: [:optional, String],
    title_icon: [:optional, TrueClass]
  })
end
