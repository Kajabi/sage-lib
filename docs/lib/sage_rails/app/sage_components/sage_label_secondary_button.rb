class SageLabelSecondaryButton < SageComponent
  set_attribute_schema({
    attributes:       [:optional, NilClass, Hash],
    css_classes:      [:optional, String],
    icon:             [:optional, String],
    value:            [:optional, String],
  })
end
