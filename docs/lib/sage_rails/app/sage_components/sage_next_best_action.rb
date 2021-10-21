class SageNextBestAction < SageComponent
  set_attribute_schema({
    card_color: [:optional, SageSchemas::STATUSES],
    description: [:optional, String],
    dismissable: [:optional, TrueClass],
    graphic: [:optional, {
      element: [:optional, String],
      on_right: [:optional, TrueClass],
    }],
    title: [:optional, String],
  })

  def sections
    %w(actions)
  end
end
