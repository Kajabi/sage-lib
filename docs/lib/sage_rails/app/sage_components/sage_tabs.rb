class SageTabs < SageComponent
  set_attribute_schema({
    align_items_center: [:optional, NilClass, TrueClass],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    id: [:optional, NilClass, String],
    items: [:optional, NilClass, [[SageSchemas::CHOICE]], [[SageSchemas::TAB]]],
    justify: [:optional, NilClass, Set.new(["center", "end", "space-between"])],
    navigational: [:optional, NilClass, TrueClass],
    permalink: [:optional, NilClass, TrueClass], # For Docs site use only.
    progressbar: [:optional, NilClass, TrueClass],
    stacked: [:optional, NilClass, TrueClass],
    style: [:optional, NilClass, Set.new(["choice", "filter"])],
    with_background: [:optional, NilClass, TrueClass],
  })
end
