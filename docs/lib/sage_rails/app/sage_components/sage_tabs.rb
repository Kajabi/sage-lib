class SageTabs < SageComponent
  set_attribute_schema({
    align_items_center: [:optional, TrueClass],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    id: [:optional, String],
    items: [:optional, [[SageSchemas::CHOICE]], [[SageSchemas::TAB]]],
    justify: [:optional, NilClass, Set.new(["center", "end", "space-between"])],
    navigational: [:optional, TrueClass],
    permalink: [:optional, TrueClass], # For Docs site use only.
    progressbar: [:optional, TrueClass],
    stacked: [:optional, TrueClass],
    style: [:optional, Set.new(["choice"])],
    with_background: [:optional, TrueClass],
  })
end
