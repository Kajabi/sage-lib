class SageCardList < SageComponent
  set_attribute_schema({
    block_spacing: [:optional, NilClass, Set.new(["sm"])],
    hide_first_border: [:optional, NilClass, TrueClass],
  })
end
