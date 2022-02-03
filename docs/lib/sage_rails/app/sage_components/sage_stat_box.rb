class SageStatBox < SageComponent
  set_attribute_schema({
    data: String,
    has_data: [:optional, TrueClass],
    icon: [:optional, {
      card_color: [:optional, SageSchemas::STATUSES],
      color: [:optional, SageSchemas::COLOR_SLIDER],
      name: SageSchemas::ICON,
    }],
    image: [:optional, {
      alt: [:optional, String],
      src: String
    }],
    legend_dot_color: [:optional, SageSchemas::COLORS],
    legend_dot_custom_color: [:optional, String],
    raised: [:optional, TrueClass],
    timeframe: [:optional, String],
    title: String,
  })

  def sections
    %w(stat_box_popover stat_box_custom_label stat_box_actions)
  end
end
