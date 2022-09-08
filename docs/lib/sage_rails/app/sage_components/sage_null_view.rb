class SageNullView < SageComponent
  set_attribute_schema({
    center_vertical: [:optional, NilClass, TrueClass],
    graphic: [:optional, NilClass, String],
    reversed: [:optional, NilClass, TrueClass],
    text: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
  })
  def sections
    %w(sage_null_view_actions)
  end
end
