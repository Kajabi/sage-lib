class SageCardListItem < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    grid_template: SageSchemaHelper::GRID_TEMPLATE
  })
end
