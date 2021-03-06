class SageTransactionCard < SageComponent
  set_attribute_schema({
    amount: [:optional, String],
    amount_color: [:optional, Set.new(["sage", "red"])],
    label_color: [:optional, SageSchemas::STATUSES],
    label_text: [:optional, String],
    name: [:optional, String],
    name_href: [:optional, String],
    name_tag: [:optional, String],
    related_property: [:optional, String],
    related_property_href: [:optional, String],
    transaction_state: [:optional, String],
    transaction_state_color: [:optional, Set.new(["sage", "red"])],
    transaction_time: [:optional, String],
  })
end
