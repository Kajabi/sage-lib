module SageSchemas

  # Miscellaneous

  ICON = Set.new(SageTokens::ICONS)

  ICON_SIZE = Set.new(SageTokens::ICON_SIZES)

  COLORS = Set.new(SageTokens::COLORS)

  COLOR_SLIDER = Set.new(SageTokens::COLOR_SLIDERS)

  CONTAINER_SIZE = [:optional, Set.new(SageTokens::CONTAINER_SIZES)]

  GRID_TEMPLATE = Set.new(SageTokens::GRID_TEMPLATES)

  HERO_SIZE = Set.new(SageTokens::HERO_SIZES)

  STATUSES = Set.new(SageTokens::STATUSES)

  SPACER = {
    top: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    right: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    bottom: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    left: [:optional, Set.new(SageTokens::SPACER_SIZES)],
  }

  # Components

  AVATAR = {
    centered: [:optional, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLORS],
    image: [:optional, {alt: [:optional, String], src: String}],
    initials: [:optional, String],
    lazy_load_initials: [:optional, NilClass, TrueClass],
    size: [:optional, String],
  }

  CHOICE = {
    active: [:optional, NilClass, TrueClass],
    align_center: [:optional, TrueClass],
    attributes: [:optional, NilClass, Hash],
    custom_content_class: [:optional, NilClass, String],
    disabled: [:optional, NilClass, TrueClass],
    graphic: [:optional, NilClass, String],
    icon: [:optional, NilClass, String],
    link_text: [:optional, NilClass, String],
    subtext: [:optional, NilClass, String],
    target: [:optional, NilClass, String],
    text: [:optional, NilClass, String],
    type: [:optional, NilClass, Set.new(["arrow", "graphic", "icon", "radio"])],
    vertical_align_icon: [:optional, NilClass, Set.new(["start"])],
    radio_configs: [:optional, NilClass, {
      value: String,
      name: String,
      id: String,
    }]
  }

  DROPDOWN_ITEM = {
    attributes: [:optional, Hash],
    icon: [:optional, NilClass, String],
    css_classes: [:optional, NilClass, String],
    is_heading: [:optional, TrueClass],
    modifiers: [:optional, [[Set.new(["disabled", "border-before", "border-after", nil])]]],
    selected: [:optional, TrueClass],
    style: [:optional, Set.new(["primary", "danger", "muted"])],
    value: String,
  }

  PANEL_FIGURE = {
    aspect_ratio: [:optional, NilClass, Integer, Float],
    background_color: [:optional, NilClass, String],
    bleed: [:optional, Set.new(["top", "bottom", "sides"])],
    is_wistia: [:optional, TrueClass],
    padded: [:optional, NilClass, TrueClass],
  }

  MEDIA_TILE = {
    actions_dropdown_items: [:optional, [[SageSchemas::DROPDOWN_ITEM]]],
    actions_custom: [:optional, NilClass, String],
    body: [:optional, NilClass, String],
    caption: [:optional, NilClass, String],
    footer: [:optional, NilClass, String],
    media: [:optional, NilClass, String],
    media_configs: [:optional, NilClass, SageSchemas::PANEL_FIGURE],
    tile_link: [:optional, NilClass, Hash],
    title: [:optional, NilClass, String],
    title_tag: [:optional, NilClass, Set.new(["h1", "h2", "h3", "h4", "h5", "h5", "h6"])],
  }

  TAB = {
    active: [:optional, NilClass, TrueClass],
    attributes: [:optional, NilClass, Hash],
    disabled: [:optional, NilClass, TrueClass],
    target: [:optional, NilClass, String],
    text: String,
  }

  # Accepts any Collection that can be paginated
  def self.can_paginate?(value)
    value.respond_to?(:total_pages)
  end
end
