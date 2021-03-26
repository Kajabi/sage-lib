class SageNullView < SageComponent
  set_attribute_schema({
    center_vertical: [:optional, TrueClass],
    css_classes: [:optional, String],
    graphic: [:optional, String],
    reversed: [:optional, TrueClass],
    text: [:optional, String],
    title: [:optional, String],
  })
  def sections
    %w(sage_null_view_actions)
  end
end
