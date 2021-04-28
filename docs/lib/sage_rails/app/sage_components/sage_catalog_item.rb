class SageCatalogItem < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    href: [:optional, String],
    image: [:optional, String],
    title: [:optional, String],
    icon: [:optional, String],
  })

  def sections
    %w(aside)
  end
end
