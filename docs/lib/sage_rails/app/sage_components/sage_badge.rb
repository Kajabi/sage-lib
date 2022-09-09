class SageBadge < SageComponent
  set_attribute_schema({
    container_attributes: [:optional, NilClass, Hash],
    color: [:optional, NilClass, SageSchemas::STATUSES],
    interactive_type: [:optional, NilClass, Set.new([:default, :dropdown])],
    value: String,
  })

  def sections
    %w(badge_dot)
  end
end
