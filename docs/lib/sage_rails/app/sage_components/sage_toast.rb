class SageToast < SageComponent
  set_attribute_schema({
    style: [:optional, Set.new(["danger"])],
    value: String,
  })
end
