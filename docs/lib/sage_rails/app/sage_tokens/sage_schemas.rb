module SageSchemas

  # Miscellaneous

  ICON = Set.new(SageTokens::ICONS)

  ICON_SIZE = Set.new(SageTokens::ICON_SIZES)

  COLORS = Set.new(SageTokens::COLORS)

  COLOR_SLIDER = Set.new(SageTokens::COLOR_SLIDERS)

  CONTAINER_SIZE = [:optional, NilClass, Set.new(SageTokens::CONTAINER_SIZES)]

  DIVIDER_OFFSET = Set.new(SageTokens::SPACER_SIZES)

  GRID_GAP_OPTION = Set.new(SageTokens::GRID_GAP_OPTIONS)

  GRID_TEMPLATE = Set.new(SageTokens::GRID_TEMPLATES)

  HERO_SIZE = Set.new(SageTokens::HERO_SIZES)

  STATUSES = Set.new(SageTokens::STATUSES)

  SPACER = {
    top: [:optional, NilClass, Set.new(SageTokens::SPACER_SIZES)],
    right: [:optional, NilClass, Set.new(SageTokens::SPACER_SIZES)],
    bottom: [:optional, NilClass, Set.new(SageTokens::SPACER_SIZES)],
    left: [:optional, NilClass, Set.new(SageTokens::SPACER_SIZES)],
  }

  # Components

  AVATAR = {
    badge: [:optional, NilClass, TrueClass],
    badge_foregroundColor: [:optional, NilClass, Set.new(SageSchemas::COLOR_SLIDER)],
    badge_backgroundColor: [:optional, NilClass, Set.new(SageTokens::COLORS), String],
    badge_icon: [:optional, NilClass, SageSchemas::ICON],
    centered: [:optional, NilClass, TrueClass],
    color: [:optional, NilClass, SageSchemas::COLORS],
    image: [:optional, NilClass, { alt: [:optional, NilClass, String], src: String, id: [:optional, NilClass, String] }],
    initials: [:optional, NilClass, String],
    lazy_load_initials: [:optional, NilClass, TrueClass],
    size: [:optional, NilClass, String],
  }

  BUTTON = {
    align: [:optional, NilClass, String],
    attributes: [:optional, NilClass, Hash],
    custom_content_class: [:optional, NilClass, String],
    disabled: [:optional, NilClass, TrueClass],
    disclosure: [:optional, NilClass, TrueClass],
    full_width: [:optional, NilClass, TrueClass],
    icon: [:optional, NilClass, { name: String, style: Set.new(["left", "right", "only"]) }],
    icon_only: [:optional, NilClass, TrueClass],
    spinner_on_submit: [:optional, NilClass, String],
    style: [:optional, NilClass, Set.new(["primary", "accent", "secondary", "danger"])],
    value: [:optional, NilClass, String],
    # TODO: Deprecations in Next
    subtle: [:optional, NilClass, TrueClass],
    small: [:optional, NilClass, TrueClass],
  }

  CHOICE = {
    active: [:optional, NilClass, TrueClass],
    align_center: [:optional, NilClass, TrueClass],
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
    attributes: [:optional, NilClass, Hash],
    icon: [:optional, NilClass, String],
    is_heading: [:optional, NilClass, TrueClass],
    modifiers: [:optional, NilClass, [[Set.new(["disabled", "border-before", "border-after", nil])]]],
    selected: [:optional, NilClass, TrueClass],
    style: [:optional, NilClass, Set.new(["primary", "danger", "muted"])],
    value: [:optional, NilClass, {}, String],
  }

  DROPDOWN_TRIGGER_TYPE = [:optional, NilClass, Set.new(["select", "select-labeled"])]

  DROPDOWN_TRIGGER = {
    label: [:optional, NilClass, String],
    type: DROPDOWN_TRIGGER_TYPE,
    value: [:optional, NilClass, String],
    width: [:optional, NilClass, String],
  }

  DROPDOWN = {
    align: [:optional, NilClass, Set.new(["left", "center", "right"])],
    allow_multiple: [:optional, NilClass, TrueClass],
    contained: [:optional, NilClass, TrueClass],
    customized: [:optional, NilClass, TrueClass],
    custom_modifier: [:optional, NilClass, Set.new(["actions", "sort"])],
    full_width_panel: [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, String],
    items: [:optional, NilClass, [[SageSchemas::DROPDOWN_ITEM]]],
    panel_size: [:optional, NilClass, Set.new(["small"])],
    panel_width: [:optional, NilClass, String],
    panel_type: [:optional, NilClass, Set.new(["custom", "dropdown", "choice", "checkbox", "status", "searchable"])],
    search: [:optional, NilClass, TrueClass],
    trigger: [:optional, NilClass, DROPDOWN_TRIGGER],
    trigger_type: DROPDOWN_TRIGGER_TYPE,
    wrap_footer: [:optional, NilClass, TrueClass],
  }

  FRAME = {
    align: [:optional, NilClass, Set.new(SageTokens::FRAME_ALIGNMENTS)],
    background: [:optional, NilClass, Set.new(SageTokens::COLOR_SLIDERS), String],
    border: [:optional, NilClass, Set.new(SageTokens::FRAME_BORDERS)],
    border_radius: [:optional, NilClass, Set.new(SageTokens::FRAME_BORDER_RADII)],
    box_shadow: [:optional, NilClass, Set.new(SageTokens::FRAME_BOX_SHADOWS)],
    direction: [:optional, NilClass, Set.new(SageTokens::FRAME_DIRECTIONS)],
    gap: [:optional, NilClass, Set.new(SageTokens::FRAME_SPACINGS)],
    padding: [:optional, NilClass, Set.new(SageTokens::FRAME_SPACINGS)],
    tag: [:optional, NilClass, String],
    max_width: [:optional, NilClass, String, Set.new(SageTokens::FRAME_WIDTHS)],
    min_width: [:optional, NilClass, String, Set.new(SageTokens::FRAME_WIDTHS)],
    width: [:optional, NilClass, String, Set.new(SageTokens::FRAME_WIDTHS)],
    width_ratio: [:optional, NilClass, String],
    wrap: [:optional, NilClass, Set.new(SageTokens::FRAME_WRAPS)]
  }

  FORM_SELECT_OPTION = {
    text: String,
    value: [:optional, NilClass, String],
    disabled: [:optional, NilClass, TrueClass],
    selected: [:optional, NilClass, TrueClass],
  }

  FORM_SELECT_OPTGROUP = {
    group_label: String,
    disabled: [:optional, NilClass, TrueClass],
    group_options: [[FORM_SELECT_OPTION]],
  }

  LIST_ITEM = {
    id: [:optional, NilClass, Integer, String],
    more_actions: [:optional, NilClass, SageSchemas::DROPDOWN],
    sortable_update_url: [:optional, NilClass, String],
  }

  LIST = {
    drag_handle_type: [:optional, NilClass, Set.new(["default", "row"])],
    items: [:optional, NilClass, [[SageSchemas::LIST_ITEM]]],
    sortable: [:optional, NilClass, TrueClass],
    sortable_resource: [:optional, NilClass, String],
    tag: [:optional, NilClass, Set.new(["ul", "ol"])],
  }

  PANEL_FIGURE = {
    aspect_ratio: [:optional, NilClass, Integer, Float],
    background_color: [:optional, NilClass, String],
    bleed: [:optional, NilClass, Set.new(["top", "bottom", "sides"])],
    is_wistia: [:optional, NilClass, TrueClass],
    padded: [:optional, NilClass, TrueClass],
  }

  MEDIA_TILE = {
    actions_dropdown_items: [:optional, NilClass, [[SageSchemas::DROPDOWN_ITEM]]],
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
    icon: [:optional, NilClass, String],
    target: [:optional, NilClass, String],
    text: String,
  }

  # Accepts any Collection that can be paginated
  def self.can_paginate?(value)
    value.respond_to?(:total_pages)
  end
end
