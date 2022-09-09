class SageDrawer < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    disable_background_dismiss: [:optional, NilClass, TrueClass],
    expanded: [:optional, NilClass, TrueClass],
    expanded_size: [:optional, NilClass, String],
    id: [:optional, NilClass, String],
    size: [:optional, NilClass, String],
    show_close: [:optional, NilClass, TrueClass],
    title: [:optional, NilClass, String],
  })
  def sections
    %w(drawer_header)
  end
end
