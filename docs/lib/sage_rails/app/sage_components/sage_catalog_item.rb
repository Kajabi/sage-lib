class SageCatalogItem < SageComponent
  set_attribute_schema({
    href: [:optional, String],
    image: [:optional, String],
    image_aspect_ratio: [:optional, NilClass, Set.new(["square"])],
    title: [:optional, String],
    icon: [:optional, String],
  })

  def sections
    %w(aside)
  end
end
