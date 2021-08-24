module SageTokens
  COLORS = [
    "charcoal", "grey", "orange", "primary", "purple", "red", "sage", "yellow"
  ]

  COLOR_PALETTE = {
    PRIMARY_100: '#e6f4fe',
    PRIMARY_200: '#8ecafb',
    PRIMARY_300: '#0072ef',
    PRIMARY_400: '#054fb8',
    PRIMARY_500: '#07265f',
    SAGE_100: '#d0f6ea',
    SAGE_200: '#86d5bc',
    SAGE_300: '#23856d',
    SAGE_400: '#225d53',
    SAGE_500: '#183e3b',
    YELLOW_100: '#fcf8e8',
    YELLOW_200: '#fdf0b9',
    YELLOW_300: '#f0c024',
    YELLOW_400: '#8d5c2f',
    YELLOW_500: '#5c381e',
    RED_100: '#fff7f7',
    RED_200: '#f9c0b9',
    RED_300: '#cf3c32',
    RED_400: '#99221e',
    RED_500: '#5e0d0d',
    ORANGE_100: '#fbefe4',
    ORANGE_200: '#f7bd8b',
    ORANGE_300: '#f89035',
    ORANGE_400: '#a2411a',
    ORANGE_500: '#5a260c',
    PURPLE_100: '#f5effa',
    PURPLE_200: '#d9c2ef',
    PURPLE_300: '#8e5ad8',
    PURPLE_400: '#50348a',
    PURPLE_500: '#381c5e',
    GREY_100: '#f8fafb',
    GREY_200: '#f4f8fa',
    GREY_300: '#e0e7f1',
    GREY_400: '#bbcad8',
    GREY_500: '#94a6b8',
    CHARCOAL_100: '#65778b',
    CHARCOAL_200: '#526275',
    CHARCOAL_300: '#465462',
    CHARCOAL_400: '#304050',
    CHARCOAL_500: '#263240',
    WHITE: '#fff',
    BLACK: '#000',
  }

  COLOR_SLIDERS = [
    "charcoal", "grey", "orange", "primary", "purple", "red", "sage", "yellow",
    "charcoal-100", "grey-100", "orange-100", "primary-100", "purple-100", "red-100", "sage-100", "yellow-100",
    "charcoal-200", "grey-200", "orange-200", "primary-200", "purple-200", "red-200", "sage-200", "yellow-200",
    "charcoal-300", "grey-300", "orange-300", "primary-300", "purple-300", "red-300", "sage-300", "yellow-300",
    "charcoal-400", "grey-400", "orange-400", "primary-400", "purple-400", "red-400", "sage-400", "yellow-400",
    "charcoal-500", "grey-500", "orange-500", "primary-500", "purple-500", "red-500", "sage-500", "yellow-500"
  ]

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

  GRID_TEMPLATES = [
    "m", "o", "ot", "om", "oo",
    "et", "em", "eo", "it", "im", "io", "se", "sm", "so",
    "te", "ti", "ts", "me", "mi", "ms", "oe", "oi", "os",
    "ete", "eti", "ets", "eme", "emi", "ems", "eoe", "eoi", "eos",
    "ite", "iti", "its", "ime", "imi", "ims", "ioe", "ioi", "ios",
    "ste", "sti", "sts", "sme", "smi", "sms", "soe", "soi", "sos",
  ]

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
    "chart",
    "check",
    "check-circle",
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
    "comment",
    "connect",
    "conversation",
    "copy",
    "coupon",
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
    "draft",
    "drop",
    "duplicate",
    "email-activity",
    "enlarge",
    "enlarge-vertical",
    "favorite",
    "file",
    "file-money",
    "filters",
    "flag",
    "folder",
    "folder-group",
    "form",
    "fullscreen",
    "funnel",
    "gear",
    "graph",
    "handle",
    "hashtag",
    "help",
    "home",
    "home-alt",
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
    "menu",
    "menu-alt",
    "menu-bordered",
    "merge",
    "microphone",
    "microphone-off",
    "monitor",
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
    "question-circle",
    "quote",
    "redo",
    "refresh",
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
    "user-star",
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

  STATUSES = ["danger", "draft", "info", "locked", "published", "warning"]

  # All type specs. See `type-specs_scss` to keep in sync.
  TYPE_SPECS = [
    "heading-1", "heading-2", "heading-3", "heading-4", "heading-5", "heading-6",
    "nav", "nav-sub",
    "body", "body-med", "body-semi", "body-bold",
    "body-small", "body-small-med", "body-small-semi", "body-small-bold",
    "body-xsmall", "body-xsmall-med", "body-xsmall-semi", "body-xsmall-bold",
  ]

  # Only the base type specs for which we have responsive pairings of size and leading. See `sage-font-size` token as an example.
  RESPONSIVE_TYPE_SPECS = [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "body", "body-sm", "body-xs",
  ]

end
