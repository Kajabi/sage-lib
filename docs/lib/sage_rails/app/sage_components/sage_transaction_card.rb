class SageTransactionCard < SageComponent
  set_attribute_schema({
    amount: [:optional, String],
    amount_color: [:optional, Set.new(["sage", "red"])],
    label_color: [:optional, Set.new(["published", "draft", "danger", "info", "warning", "locked"])],
    label_text: [:optional, String],
    name: [:optional, String],
    href: [:optional, String],
    product_name: [:optional, String],
    state: [:optional, String],
    state_color: [:optional, Set.new(["info", "red"])],
    transaction_time: [:optional, String],
  })
end
