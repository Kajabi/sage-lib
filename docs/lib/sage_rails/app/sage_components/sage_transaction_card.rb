class SageTransactionCard < SageComponent
  set_attribute_schema({
    amount: [:optional, String],
    amount_color: [:optional, Set.new(["sage", "red"])],
    dropdown_options: [:optional, [[
      attributes: [:optional, Hash],
      icon: [:optional, String],
      value: [:optional, String],
    ]]],
    label_color: [:optional, Set.new(["published", "draft", "danger", "info", "warning", "locked"])],
    label_text: [:optional, String],
    name: [:optional, String],
    product_name: [:optional, String],
    transaction_time: [:optional, String],
  })
end
