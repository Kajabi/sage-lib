class SageNextBestAction < SageComponent
  set_attribute_schema({
    card_color: [:optional, NilClass, SageSchemas::STATUSES],
    dismissable: [:optional, NilClass, TrueClass],
    dismiss_attributes: [:optional, NilClass, Hash],
    graphic: [:optional, NilClass, {
      element: [:optional, NilClass, String],
      on_right: [:optional, NilClass, TrueClass],
    }],
    title: [:optional, NilClass, String],
  })

  def sections
    %w(next_best_action_actions next_best_action_description)
  end
end
