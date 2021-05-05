module SageSchemas
  ICON = Set.new(SageTokens::ICONS)
  
  ICON_SIZE = Set.new(SageTokens::ICON_SIZES)

  COLORS = Set.new(SageTokens::COLORS)
  
  COLOR_SLIDER = Set.new(SageTokens::COLOR_SLIDERS)

  CONTAINER_SIZE = Set.new(SageTokens::CONTAINER_SIZES)

  GRID_TEMPLATE = Set.new(SageTokens::GRID_TEMPLATES)
  
  STATUSES = Set.new(SageTokens::STATUSES)

  LABEL = {
    container_attributes: [:optional, Hash],
    color: Set.new(["danger", "draft", "info", "locked", "published", "success", "warning"]),
    icon: [:optional, String],
    interactive_type: [:optional, Set.new([:dropdown, :default, :secondary_button])],
    secondary_button: [:optional, String, TrueClass, {
      attributes:       [:optional, NilClass, Hash],
      css_classes:      [:optional, String],
      icon:             [:optional, String],
      value:            [:optional, String],
    }],
    style: [:optional, Set.new(["subtle", "bold"])],
    value: String,
  }

  SPACER = {
    top: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    right: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    bottom: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    left: [:optional, Set.new(SageTokens::SPACER_SIZES)],
  }

  # Accepts any Collection that can be paginated
  def self.can_paginate?(value)
    value.respond_to?(:total_pages)
  end
end
