class SageNextBestAction < SageComponent
  set_attribute_schema({
    card_color: [:optional, SageSchemas::STATUSES],
    dismissable: [:optional, TrueClass],
    dismiss_attributes: [:optional, NilClass, Hash],
    graphic: [:optional, {
      element: [:optional, String],
      on_right: [:optional, TrueClass],
    }],
    title: [:optional, String],
  })

  def sections
    %w(next_best_action_actions next_best_action_description)
  end
end
