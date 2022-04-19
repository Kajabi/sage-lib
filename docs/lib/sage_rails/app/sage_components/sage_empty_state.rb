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
  })
  def sections
    %w(sage_empty_state_actions sage_empty_state_text)
  end
end
