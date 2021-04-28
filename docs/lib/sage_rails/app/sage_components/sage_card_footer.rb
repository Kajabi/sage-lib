class SageCardFooter < SageComponent
  set_attribute_schema({
    align_spread: [:optional, TrueClass],
    css_classes: [:optional, String],
  })
end
