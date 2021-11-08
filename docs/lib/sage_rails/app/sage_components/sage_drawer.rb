class SageDrawer < SageComponent
  set_attribute_schema({
    show_close: [:optional, TrueClass],
    title: [:optional, String],
  })
  def sections
    %w(drawer_header)
  end
end
