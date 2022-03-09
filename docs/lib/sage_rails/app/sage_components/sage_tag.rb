class SageTag < SageComponent
  set_attribute_schema({
    value: String   
  })
  
  def sections
    %w(tag_action)
  end
end
