class SageDrawer < SageComponent
  set_attribute_schema({
    show_close: [:optional, TrueClass],
  })
  def sections
    %w(drawer_content drawer_header)
  end
end
