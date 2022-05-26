class SageCardList < SageComponent
  set_attribute_schema({
    block_spacing: [:optional, Set.new(["sm"])],
    hide_first_border: [:optional, TrueClass, String],
  })
end
