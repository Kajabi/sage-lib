class SageTransactionCard < SageComponent
  set_attribute_schema({
    name: [:optional, String],
    amount: [:optional, String],
    amount_color: [:optional, Set.new(["sage", "red"])],
  })
  def sections
    %w(sage_transaction_card_header, sage_transaction_card_footer )
  end
end
