class SageTabs < SageComponent
  set_attribute_schema({
    align_items_center: [:optional, TrueClass],
    id: [:optional, String],
    items: [:optional, [[SageSchemas::CHOICE]], [[SageSchemas::TAB]]],
    navigational: [:optional, TrueClass],
    progressbar: [:optional, TrueClass],
    stacked: [:optional, TrueClass],
    style: [:optional, Set.new(["choice"])],
  })
end
