class SageCardRow < SageComponent
  set_attribute_schema({
    grid_template: SageSchemaHelper::GRID_TEMPLATE,
    vertical_align: [:optional, TrueClass],
  })
end
