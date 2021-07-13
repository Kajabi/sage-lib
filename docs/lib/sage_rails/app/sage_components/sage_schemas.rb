module SageSchemas
  ICON = Set.new(SageTokens::ICONS)
  
  ICON_SIZE = Set.new(SageTokens::ICON_SIZES)

  COLORS = Set.new(SageTokens::COLORS)
  
  COLOR_SLIDER = Set.new(SageTokens::COLOR_SLIDERS)

  CONTAINER_SIZE = [:optional, Set.new(SageTokens::CONTAINER_SIZES)]

  GRID_TEMPLATE = Set.new(SageTokens::GRID_TEMPLATES)
  
  STATUSES = Set.new(SageTokens::STATUSES)

  SPACER = {
    top: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    right: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    bottom: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    left: [:optional, Set.new(SageTokens::SPACER_SIZES)],
  }

  DROPDOWN_ITEM = {
    attributes: [:optional, Hash],
    border_before: [:optional, TrueClass],
    icon: [:optional, NilClass, String],
    is_heading: [:optional, TrueClass],
    modifiers: [:optional, Array],
    selected: [:optional, TrueClass],
    style: [:optional, String],
    value: String,
  }

  # Accepts any Collection that can be paginated
  def self.can_paginate?(value)
    value.respond_to?(:total_pages)
  end
end
