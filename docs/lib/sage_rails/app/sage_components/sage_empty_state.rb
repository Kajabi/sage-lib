class SageEmptyState < SageComponent
  set_attribute_schema({
    center_vertical: [:optional, TrueClass],
    compact: [:optional, TrueClass],
    graphic: [:optional, String],
    icon: [:optional, String],
    scope: [:optional, Set.new(["page", "compact", nil])],
    text: [:optional, String],
    title: [:optional, String],
    title_tag: [:optional, Set.new(["h1", "h2", "h3", "h4", "h5", "h5", "h6"])],
    video: [:optional, Hash],
  })
  def sections
    %w(empty_state_actions empty_state_text empty_state_video)
  end
end
