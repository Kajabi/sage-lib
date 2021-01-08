class SageSidebar < SageComponent
  set_attribute_schema({
    size: [:optional, Set.new(["md", "lg"])],
  })
end
