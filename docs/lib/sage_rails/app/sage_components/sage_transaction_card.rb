class SageTransactionCard < SageComponent
  set_attribute_schema({
    label_color: [:optional, Set.new(["published", "draft", "danger", "info", "warning", "locked"])],
    label_text: [:optional, String],
    name: [:optional, String],
    amount: [:optional, String],
    amount_color: [:optional, Set.new(["sage", "red"])],
    product_name: [:optional, String],
    transaction_time: [:optional, String],
    dropdown_link: [:optional, String],
  })
end
