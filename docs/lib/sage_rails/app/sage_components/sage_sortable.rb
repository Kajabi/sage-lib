class SageSortable < SageComponent
  attr_accessor :resource_name
  attr_accessor :items

  def sections
    %w(empty)
  end
end
