class SageDrawer < SageComponent
  set_attribute_schema({
    title: String,
  })
  def sections
    %w(drawer_content)
  end
end
