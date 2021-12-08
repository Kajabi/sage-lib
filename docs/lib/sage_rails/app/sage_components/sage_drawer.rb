class SageDrawer < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, String],
    show_close: [:optional, TrueClass],
    title: [:optional, String],
  })
  def sections
    %w(drawer_header)
  end
end
