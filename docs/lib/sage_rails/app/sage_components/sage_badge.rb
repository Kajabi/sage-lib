class SageBadge < SageComponent
  set_attribute_schema({
    container_attributes: [:optional, Hash],
    color: [:optional, SageSchemas::STATUSES],
    interactive_type: [:optional, Set.new([:default, :dropdown])],
    style: [:optional, Set.new(["subtle", "bold"])],
    value: String,
  })

  def sections
    %w(badge_dot)
  end
end
