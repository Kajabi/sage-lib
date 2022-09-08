class SageTransactionCard < SageComponent
  set_attribute_schema({
    amount: [:optional, NilClass, String],
    amount_color: [:optional, NilClass, Set.new(["sage", "red"])],
    label_color: [:optional, NilClass, SageSchemas::STATUSES],
    label_text: [:optional, NilClass, String],
    name: [:optional, NilClass, String],
    name_href: [:optional, NilClass, String],
    name_tag: [:optional, NilClass, String],
    related_property: [:optional, NilClass, String],
    related_property_href: [:optional, NilClass, String],
    transaction_state: [:optional, NilClass, String],
    transaction_state_color: [:optional, NilClass, Set.new(["sage", "red"])],
    transaction_time: [:optional, NilClass, String],
  })
end
