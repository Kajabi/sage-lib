class SageNullView < SageComponent
  set_attribute_schema({
    title: [:optional, String],
    text: [:optional, String],
    graphic: [:optional, String],
    reversed: [:optional, TrueClass],
    center_vertical: [:optional, TrueClass]
  })
  def sections
    %w(sage_null_view_actions)
  end
end
