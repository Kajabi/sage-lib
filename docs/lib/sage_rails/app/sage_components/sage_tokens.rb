module SageTokens

  #
  # Style dictionary utility methods
  #

  # Extract color names from dictionary core map
  def SageTokens.color
    SageDictionary::SD_SAGE_COLOR_CORE.map { | k, v | k.to_s.downcase }
  end

  # Extract color palette hex values from base color map
  def SageTokens.color_palette
    palette = {}
    SageDictionary::SD_SAGE_COLOR.each do |color, hash|
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
    SageDictionary::SD_SAGE_COLOR.each do |color, hash|
      hash.each do |index, values|
        case color
        when :BLACK
          # skip black values
        when :WHITE
          # skip white values
        else
          sliders.push(values[:CODE])
        end
      end
    end
    sliders
  end

  # Extract grid template symbols
  def SageTokens.grid_templates
    SageDictionary::SD_SAGE_CONTENT_GRID_TEMPLATE.map { |k,v| v[:SYMBOL] }
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
      alias: "tiny",
      max_size: "200px",
      name: "Tiny",
      usage: "For smaller dropdowns.",
    },
    {
      alias: "xs",
      max_size: "240px",
      name: "Extra Small",
      usage: "For standard dropdowns and smaller modal panels.",
    },
    {
      alias: "sm",
      max_size: "352px",
      name: "Small",
      usage: "For one third of a trifold layout, the smaller portion of a side fold layout, standard modal panels, and narrow single-column layouts.",
    },
    {
      alias: "md",
      max_size: "544px",
      name: "Medium",
      usage: "For one half of a bifold layout, medium-sized single column layouts, and larger modal panels.",
    },
    {
      alias: "lg",
      max_size: "736px",
      name: "Large",
      usage: "For the larger part of a side fold layout, larger single-column layouts, and largest for modal panels.",
    },
    {
      alias: "xl",
      max_size: "1120px",
      name: "Large",
      usage: "For single-column layouts that span full portion of stage yet stay at a maximum of 1120px wide.",
    },
    {
      alias: "full",
      max_size: "1440px",
      name: "Full",
      usage: "For widest possible panels and containing layout patterns.",
    }
  ]

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
    "info-circle",
    "italic",
    "kajabi",
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
    "newsletter",
    "one-off-session",
    "package",
    "pen",
    "phone-toolbar",
    "play",
    "play-outline",
    "plug",
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
    "speaker",
    "stack",
    "star",
    "stop",
    "strikethrough",
    "subscript",
    "success",
    "superscript",
    "super-admin",
    "sync",
    "tag",
    "tag-filled",
    "theme-store",
    "trash",
    "underline",
    "undo",
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
    "warning",
    "window-paragraph",
    "world",
  ]

  ICON_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]

  POPOVER_POSITIONS = ["top", "top-right", "right", "bottom", "bottom-right", "left"]

  SPACER_SIZES = [:xs, :sm, :md, :lg, :xl, "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "stage", "panel", "card", "stack"]

  STATUSES = ["danger", "draft", "info", "locked", "published", "warning", "reached", "exceeded", "approaching"]

  # All type specs. Keep in sync with `packages/sage-assets/lib/stylesheets/tokens/_type_specs.scss`
  TYPE_SPECS = [
    "heading-1", "heading-2", "heading-3", "heading-4", "heading-5", "heading-6",
    "nav", "nav-sub",
    "body", "body-med", "body-semi", "body-bold",
    "body-small", "body-small-med", "body-small-semi", "body-small-bold",
    "body-xsmall", "body-xsmall-med", "body-xsmall-semi", "body-xsmall-bold",
  ]

  # Aliasses for responsive pairings of size and leading. Keep in sync with `sage-font-size` token as an example.
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

end
