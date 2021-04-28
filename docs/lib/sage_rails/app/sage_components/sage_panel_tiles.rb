class SagePanelTiles < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    tiles_in_row: Set.new([2, 3, 4])
  })
end
