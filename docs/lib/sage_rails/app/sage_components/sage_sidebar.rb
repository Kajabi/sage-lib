class SageSidebar < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    id: String,
    size: [:optional, Set.new(["md", "lg"])],
  })
  def sections
    %w(sidebar_footer)
  end
end
