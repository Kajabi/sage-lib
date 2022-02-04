class SageStatBox < SageComponent
  set_attribute_schema({
    data: String,
    has_data: [:optional, NilClass, TrueClass],
    icon: [:optional, NilClass, {
      card_color: [:optional, SageSchemas::STATUSES],
      color: [:optional, SageSchemas::COLOR_SLIDER],
      name: SageSchemas::ICON,
    }],
    image: [:optional, {
      alt: [:optional, NilClass, String],
      src: String
    }],
    legend_dot_color: [:optional, NilClass, SageSchemas::COLORS],
    legend_dot_custom_color: [:optional, NilClass, String],
    raised: [:optional, NilClass, TrueClass],
    timeframe: [:optional, NilClass, String],
    title: String,
  })

  def sections
    %w(stat_box_popover stat_box_label stat_box_actions)
  end
end
