class SageDrawer < SageComponent
  set_attribute_schema({
    dismissable: [:optional, TrueClass],
  })
  def sections
    %w(drawer_content)
  end
end
