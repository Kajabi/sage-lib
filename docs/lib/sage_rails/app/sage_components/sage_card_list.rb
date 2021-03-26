class SageCardList < SageComponent
  set_attribute_schema({
    block_spacing: [:optional, Set.new(["sm"])],
    css_classes: [:optional, String],
  })
end
