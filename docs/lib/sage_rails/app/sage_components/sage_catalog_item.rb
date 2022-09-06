class SageCatalogItem < SageComponent
  set_attribute_schema({
    href: [:optional, NilClass, String],
    image: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
    icon: [:optional, NilClass, String],
  })

  def sections
    %w(aside)
  end
end
