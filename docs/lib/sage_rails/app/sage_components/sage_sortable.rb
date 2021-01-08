class SageSortable < SageComponent
  set_attribute_schema({
    resource_name: String
  })

  def sections
    %w(empty)
  end
end
