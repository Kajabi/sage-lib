class SageOutlineItem < SageComponent
  set_attribute_schema({
    title: [:optional, String],
    actions_secondary: [:optional, Array],
    actions_primary: [:optional, Array],
    status: [:optional, String],
    icon: [:optional, String],
    depth: [:optional, Integer],
    category: [:optional, TrueClass],
  })
end
