class SageCatalogItem < SageComponent
  attr_accessor :image
  attr_accessor :href
  attr_accessor :title

  def sections
    %w(aside)
  end
end
