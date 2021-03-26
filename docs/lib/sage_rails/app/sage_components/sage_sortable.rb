class SageSortable < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    resource_name: String
  })

  def sections
    %w(empty)
  end
end
