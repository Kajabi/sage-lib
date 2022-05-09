module SageTokens

  #
  # Style dictionary utility methods
  #

  # Extract color names from dictionary core map
  def SageTokens.color
    # TODO: THEME how to get current theme's dictionary to apply here?
    SageDictionary::THEME::SD_SAGE_COLOR_CORE.map { | k, v | k.to_s.downcase }
  end

  # Extract color palette hex values from base color map
  def SageTokens.color_palette
    palette = {}
    SageDictionary::THEME::SD_SAGE_COLOR.each do |color, hash|
      hash.each do |index, values|
        case color
        when :BLACK
          # omit index for black value
          palette = palette.merge({ "#{color}": values[:HEX] })
        when :WHITE
          # omit index for white value
          palette = palette.merge({ "#{color}": values[:HEX] })
        else
          palette = palette.merge({ "#{color}_#{index}": values[:HEX] })
        end
      end
    end
    palette
  end

  # Extract color palette hex values from base color map
  def SageTokens.color_sliders
    sliders = SageTokens.color()
    SageDictionary::THEME::SD_SAGE_COLOR.each do |color, hash|
      hash.each do |index, values|
        case color
        when :BLACK
          sliders.push(values[:CODE])
        when :WHITE
          sliders.push(values[:CODE])
        else
          sliders.push(values[:CODE])
        end
      end
    end
    sliders
  end

  # Extract grid template symbols
  def SageTokens.grid_templates
    SageDictionary::THEME::SD_SAGE_CONTENT_GRID_TEMPLATE.map { |k,v| v[:SYMBOL] }
  end

  #
  # Constants
  #

  COLORS = SageTokens.color()

  COLOR_PALETTE = SageTokens.color_palette()

  COLOR_SLIDERS = SageTokens.color_sliders()

  CONTAINER_SIZES = ["tiny", "xs", "sm", "md", "lg", "xl", "full"]

  CONTAINER_SPECS = [
    {
      alias: "sm",
      max_size: "340px",
      name: "Small",
      usage: "sage-container(sm)",
    },
    {
      alias: "md",
      max_size: "520px",
      name: "Medium",
      usage: "sage-container(md)",
    },
    {
      alias: "lg",
      max_size: "700px",
      name: "Large",
      usage: "sage-container(lg)",
    },
    {
      alias: "full",
      max_size: "1064px",
      name: "Full",
      usage: "sage-container(full)",
    }
  ]

  GRID_GAP_OPTIONS = [:xs, :sm, :md, :lg, "xs", "sm", "md", "lg"]

  GRID_TEMPLATES = SageTokens.grid_templates()

  HERO_SIZES = ["small", "large"]

  ICONS = [
    "add",
    "add-circle",
    "add-image",
    "add-small",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "archive",
    "arrow-corner",
    "arrow-down",
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "assessment",
    "at-sign",
    "attach",
    "automations",
    "ban",
    "bell",
    "beta",
    "blog",
    "bold",
    "broadcast",
    "calendar-date",
    "calendar-schedule",
    "calendar-simple",
    "card-update",
    "caret-down",
    "caret-left",
    "caret-right",
    "caret-up",
    "cart",
    "cart-add",
    "chart",
    "chart-filled",
    "check",
    "check-circle",
    "check-circle-filled",
    "circle-1",
    "circle-2",
    "circle-3",
    "circle-4",
    "circle-5",
    "circle-6",
    "circle-7",
    "circle-8",
    "circle-9",
    "clock",
    "closed-captions",
    "code",
    "color",
    "columns",
    "comment",
    "connect",
    "contact",
    "conversation",
    "copy",
    "coupon",
    "course",
    "credit-card",
    "custom-field",
    "customize",
    "danger-filled",
    "danger",
    "delete-circle",
    "delete-key",
    "delete-x",
    "dot-menu-horizontal",
    "down-small",
    "download",
    "downsell",
    "draft",
    "drop",
    "duplicate",
    "email-activity",
    "enlarge",
    "enlarge-vertical",
    "expand",
    "favorite",
    "feedback",
    "file",
    "file-money",
    "filters",
    "flag",
    "folder",
    "folder-group",
    "form",
    "form-field",
    "fullscreen",
    "funnel",
    "gear",
    "gear-filled",
    "grant-offer",
    "graph",
    "handle",
    "handle-2",
    "handle-2-vertical",
    "hashtag",
    "heading-large",
    "heading-small",
    "help",
    "help-filled",
    "home",
    "home-alt",
    "home-filled",
    "horizontal-line",
    "image",
    "info-circle-filled",
    "info-circle",
    "italic",
    "kajabi",
    "kajabi-filled",
    "lab",
    "launch",
    "left-small",
    "list-bullet",
    "list-details",
    "list-numbers",
    "list-stack",
    "location",
    "lock",
    "lock-alt",
    "loop",
    "mail",
    "mapped",
    "margin-left",
    "margin-right",
    "megaphone",
    "megaphone-filled",
    "menu",
    "menu-alt",
    "menu-bordered",
    "merge",
    "microphone",
    "microphone-off",
    "monitor",
    "monitor-filled",
    "move-left",
    "move-right",
    "multi-pay",
    "newsletter",
    "one-off-session",
    "one-time",
    "package",
    "pen",
    "phone-portrait",
    "phone-toolbar",
    "play",
    "play-circle",
    "play-outline",
    "plug",
    "present",
    "preview-off",
    "preview-on",
    "product",
    "product-filled",
    "question-circle",
    "quote",
    "redo",
    "refresh",
    "reset-password",
    "remove",
    "remove-circle",
    "rename",
    "restore",
    "right-small",
    "round-dollar",
    "screen-share-off",
    "screen-share-on",
    "search",
    "search-small",
    "select",
    "send-message",
    "sequences",
    "skipped",
    "slash-divider",
    "speaker",
    "stack",
    "star",
    "stop",
    "strikethrough",
    "subscript",
    "subscriptions",
    "success",
    "super-admin",
    "superscript",
    "sync",
    "tablet-landscape",
    "tablet-portrait",
    "tag",
    "tag-filled",
    "theme-store",
    "trash",
    "underline",
    "undo",
    "unlock",
    "unmapped",
    "up-small",
    "upload",
    "url",
    "user",
    "user-circle",
    "user-circle-filled",
    "user-star",
    "user-star-filled",
    "users",
    "users-alt",
    "video-off",
    "video-on",
    "warning-filled",
    "warning",
    "window-paragraph",
    "world",
  ]

  ICON_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]

  POPOVER_POSITIONS = ["top", "top-right", "right", "bottom", "bottom-right", "left"]

  SPACER_SIZES = [:xs, :sm, :md, :lg, :xl, "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "stage", "panel", "card", "stack"]

  STATUSES = ["default", "danger", "draft", "info", "locked", "published", "warning", "reached", "exceeded", "approaching"]

  # All type specs. Keep in sync with `packages/sage-assets/lib/stylesheets/tokens/_type_specs.scss`
  TYPE_SPECS = [
    "heading-1", "heading-2", "heading-3", "heading-4", "heading-5", "heading-6",
    "nav", "nav-sub",
    "body", "body-med", "body-semi", "body-bold",
    "body-small", "body-small-med", "body-small-semi", "body-small-bold",
    "body-xsmall", "body-xsmall-med", "body-xsmall-semi", "body-xsmall-bold",
  ]

  # Aliasses for responsive pairings of size and leading.
  # Keep in sync with `line-height` custom props set in `sage-assets/.../core/_typography.scss`
  RESPONSIVE_TYPE_SPECS = [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "body", "body-sm", "body-xs",
  ]

  # Keep in sync with `packages/sage-assets/lib/stylesheets/tokens/_z_index.scss`
  Z_INDEXES = {
    NEGATIVE: -1,
    DEFAULT: 0,
    RAISED: 1000,
    ALERT: 2000,
    UNDERLAY: 3000,
    NAV: 4000,
    OVERLAY: 5000,
    MODAL: 6000,
    PRIORITY: 8000,
    NUCLEAR: 9000,
  }

  # Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
  FRAME_ALIGNMENTS = [
    "top-left",
    "top-center",
    "top-right",
    "center-left",
    "center",
    "center-right",
    "baseline-left",
    "baseline-center",
    "baseline-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
    "start-spread",
    "center-spread",
    "end-spread",
    "stretch-left",
    "stretch-right",
    "stretch-center",
    "stretch-spread",
    "spread-stretch",
  ]

  # Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
  FRAME_BORDERS = [
    "none",
    "default",
  ]

  # Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
  FRAME_BORDER_RADII = [
    "none",
    "sm",
    "md",
    "lg"
  ]

  # Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
  FRAME_DIRECTIONS = [
    "vertical",
    "horizontal",
  ]

  # Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
  FRAME_SPACINGS = SPACER_SIZES.push(*[
    "none"
  ])

  FRAME_WIDTHS = [
    "hug",
    "fill",
    "flex",
  ]

end
