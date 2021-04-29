class SageLabelSecondaryButton < SageComponent
  set_attribute_schema({
    attributes:       [:optional, NilClass, Hash],
    icon:             [:optional, String],
    value:            [:optional, String],
  })
end
