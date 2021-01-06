class SageCatalogItem < SageComponent
  set_attribute_schema({
    href: [:optional, String],
    image: [:optional, String],
    title: [:optional, String],
  })

  def sections
    %w(aside)
  end
end
