class SageAccordion < SageComponent
  set_attribute_schema({
    only_one_panel_expanded: [:optional, NilClass, TrueClass],
  })
end
