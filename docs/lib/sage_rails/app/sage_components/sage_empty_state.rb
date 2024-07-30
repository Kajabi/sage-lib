class SageEmptyState < SageComponent
  set_attribute_schema({
    center_vertical: [:optional, NilClass, TrueClass],
    graphic: [:optional, NilClass, String],
    icon: [:optional, NilClass, String],
    scope: [:optional, NilClass, Set.new(["compact", nil])],
    text: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
    title_tag: [:optional, NilClass, Set.new(["h1", "h2", "h3", "h4", "h5", "h6"])],
  })
  def sections
    %w(empty_state_actions empty_state_text empty_state_video)
  end
end
