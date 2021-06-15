module ComponentsHelper
  ########################################################
  # STATUS KEY
  # Done : done
  # In Progress : doing
  # To-do : todo
  # Not applicable : no
  # Deprecated : stop
  ########################################################

  # Lists out all the available sage components
  def sage_components
    [
      # Sage Generated Components
      {
        title: "breadcrumbs",
        description: "Breadcrumbs provide a sense of where we are in the site structure with hyperlinks to previous areas in that structure. Our component also provides a specific \"Back link\" variation",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-breadcrumbs--single-item"
      },
      {
        title: "button",
        description: "Standard button styling with multiple display options. Can be applied on both button and link components.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-button--default"
      },
      {
        title: "card_highlight",
        description: "A special highlight edge to apply to Card components.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-card--card-highlight"
      },
      {
        title: "chart_legend",
        description: "Sage charts legend are used primarily in React-based Recharts bar charts when multiple bars are used for a given data point.",
        scss: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-chart--multiple-bars"
      },
      {
        title: "chart_summary",
        description: "Chart summaries are used primarily in React-based Recharts diagrams to display summary information with Sage type styling.",
        scss: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-chart--donut"
      },
      {
        title: "checkbox",
        description: "Checkboxes provide users with selectable options like toggling a single setting or selecting multiple options from a list.",
        scss: "done",
        docs: "todo",
        rails: "no",
        react: "no",
        a11y: "todo",
        react_component_slug: "sage-checkbox--default"
      },
      {
        title: "choice",
        description: "A radio button tab for making a choice. To be used inside a tabs component.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-tabs--default"
      },
      {
        title: "container",
        description: "For setting contents of varying complexity inside a fixed space.",
        scss: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-grid--default"
      },
      {
        title: "copy_text",
        description: "A small set of components to use in places where \"copy\" text is provided such as in a Copy Button or a block of text to be copied elsewhere.",
        scss: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-copytext--default"
      },
      {
        title: "description",
        description: "A description is composed of title and data content and is structured as a definition list.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "done"
      },
      {
        title: "form_input",
        description: "Basic text input form fields with 'floating' labels",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo",
        react_component_slug: "sage-input--default"
      },
      {
        title: "form_select",
        description: "The form select presents a selectable menu of options. The options within the menu are represented by <option> elements.",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-select--default"
      },
      {
        title: "form_textarea",
        description: "Basic text area input field with 'floating' label",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo",
        react_component_slug: "sage-textarea--default"
      },
      {
        title: "hint",
        description: "A hint is used to display non-critical informative text.",
        scss: "done",
        rails: "done",
        react: "done",
        a11y: "todo",
        react_component_slug: "sage-hint--default"
      },
      {
        title: "icon",
        description: "Display a standalone icon with a customizble size, color, and more! Our library of icons is available under the #{link_to("Design section's Icons page", pages_design_path(:icon))}.".html_safe,
        scss: "todo",
        rails: "todo",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-icon--default"
      },
      {
        title: "icon_card",
        description: "A simple component that allows an icon to be rendered on a field with a unified color scheme applied.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-iconcard--default"
      },
      {
        title: "indicator",
        description: "A simple dot-styled position indicator bar. This is currently not intended to be used as navigation but only a visual indicator.",
        scss: "doing",
        docs: "doing",
        rails: "done",
        react: "todo",
        a11y: "doing"
      },
      {
        title: "label",
        description: "Labels show concise metadata or indicate status in a compact format.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-label--default"
      },
      {
        title: "link",
        description: "While links have default styling in the app, some links deserve a little more ❤️",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-link--primary"
      },
      {
        title: "lists",
        description: "Sage lists provide a few styling alternatives for unstyled and inline formatting.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
      },
      {
        title: "loader",
        description: "Stylized loading animations for use with components",
        scss: "done",
        docs: "done",
        rails: "yes",
        react: "yes",
        a11y: "done",
        react_component_slug: "sage-loader--default"
      },
      {
        title: "meter",
        description: "A horizontal display indicating the measurement of a known (finite) quantity",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "nav_link",
        description: "These are links specifically defined within the Nav component",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo"
      },
      {
        title: "progress_bar",
        description: "Displays progress with a value",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "property",
        description: "TO BE NAMED – Displays a metadata item for a resource.",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-property--primary"
      },
      {
        title: "radio",
        description: "Radio components provide users a way to select only one option from a list of two or more options.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo",
        react_component_slug: "sage-radio--default"
      },
      {
        title: "search",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        scss: "doing",
        docs: "doing",
        rails: "todo",
        react: "todo",
        a11y: "doing",
        react_component_slug: "sage-search--default"
      },
      {
        title: "stat_box",
        description: "Stat Boxes, for use in the CRM Dashboard, display important statistics for users to make informed decisions about their business.",
        scss: "done",
        rails: "done",
        react: "done",
        a11y: "todo",
        react_component_slug: "sage-statbox--default"
      },
      {
        title: "status_icon",
        description: "Display the status of an item",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "done"
      },
      {
        title: "switch",
        description: "Checkbox or radio component styled to appear as a toggle",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo",
        react_component_slug: "sage-switch--default"
      },
      {
        title: "tab",
        description: "A tab button to be used inside a tabs component",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-tabs--default"
      },
      {
        title: "table",
        description: "Basic table component",
        scss: "doing",
        docs: "doing",
        rails: "done",
        react: "todo",
        a11y: "done",
        react_component_slug: "sage-table--default"
      },
      {
        title: "toast",
        description: "Displays a temporary notification to a user.",
        scss: "done",
        docs: "no",
        rails: "todo",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-toast--default"
      },
      {
        title: "tooltip",
        description: "Tooltips display helpful text when users hover over an element.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-tooltip--default"
      },
      {
        title: "alert",
        description: "Alerts are used to indicate user-driven notifications.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-alert--default"
      },
      {
        title: "assistant",
        description: "Page header with optional side menu toggle button.",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "avatar",
        description: "The Avatar component shows a user's profile image in a circular frame and allows for a few helpful modifications for different uses.",
        scss: "done",
        docs: "done",
        rails: "no",
        react: "done",
        a11y: "todo",
        react_component_slug: "sage-avatar--default"
      },
      {
        title: "banner",
        description: "A banner that displays at the top of the page, used for systemwide notifications and events.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "doing",
        a11y: "done"
      },
      {
        title: "billboard",
        description: "A billboard is composed of a full-width background image, a title, and supporting copy.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "card",
        description: "A versatile smaller container for grouping content within panels",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "doing",
        a11y: "done",
        react_component_slug: "sage-card--default"
      },
      {
        title: "catalog_item",
        description: "The Catalog Item displays Products, Offers, and other resources with a large amount of detail to display in list form.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "done"
      },
      {
        title: "data_card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        scss: "todo",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "done",
        react_component_slug: "sage-datacard--default"
      },
      {
        title: "dropdown",
        description: "Sage dropdown",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-dropdown--default"
      },
      {
        title: "empty_state",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        scss: "todo",
        docs: "done",
        rails: "todo",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-emptystate--default"
      },
      {
        title: "expandable_card",
        description: "Card that can be expanded and collapsed in order to display additional content.",
        scss: "todo",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "done",
        react_component_slug: "sage-expandablecard--default"
      },
      {
        title: "feature_toggle",
        description: "Feature toggle",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "form_section",
        description: "A form section genera11y consists of a text section to provide users with instruction, guidance, or related information along with a secondary panel that may contain form inputs and/or related general content.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "hero",
        description: "Pending",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        a11y: "done",
      },
      {
        title: "icon_list",
        description: "Icon lists allow for a richer formatting for bulleted lists of things including checkbox lists, feature lists, and more!",
        scss: "todo",
        docs: "todo",
        rails: "todo",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-icon-list--default"
      },
      {
        title: "input_group",
        description: "Allows inline grouping of text inputs with buttons",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "done"
      },
      {
        title: "input_helper",
        description: "Provides an extended tooltip/popup for text inputs",
        scss: "doing",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "modal",
        description: "Sage modal",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-modal--wired"
      },
      {
        title: "nav",
        description: "Nav is a hierarchical, vertical navigation and can include nested menu items.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo"
      },
      {
        title: "null_view",
        description: "Null view displays content, action items, and a graphic in order to introduce a customer to a section of the app that may not yet have content.",
        scss: "todo",
        rails: "todo",
        react: "todo",
        a11y: "todo",
      },
      {
        title: "page_heading",
        description: "Page headings are used at the top of pages and contain the title of the page along with optional breadcrumbs, help link, action buttons, toolbar, and intro text.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-pageheading--default"
      },
      {
        title: "pagination",
        description: "Pagination is used for splitting up results into several pages and provides controls for navigating to the next or previous page.",
        scss: "done",
        docs: "done",
        rails: "todo",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-pagination--default"
      },
      {
        title: "panel",
        description: "Panels are used as multi-purpose containers for a variety of content.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
        react_component_slug: "sage-panel--default"
      },
      {
        title: "panel_controls",
        description: "Panel controls provides a unified interface for controlling lists inside of a panel.",
        scss: "doing",
        docs: "doing",
        rails: "doing",
        react: "todo",
        a11y: "doing",
        react_component_slug: "sage-panelcontrols--default"
      },
      {
        title: "popover",
        description: "Popovers open upon click to show information regarding the section. It has a header/subject, minimal information, and a link to learn more",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        a11y: "done",
        react_component_slug: "sage-popover--default"
      },
      {
        title: "sidebar",
        description: "The sidebar component is a fixed, vertical panel that typica11y displays navigation and/or page hierarchy.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo"
      },
      {
        title: "sortable",
        description: "Sage sortable list",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-sortable--default"
      },
      {
        title: "tabs",
        description: "Tabs organize related content across screens, data sets, and can be used for navigation to related destinations.",
        scss: "todo",
        docs: "todo",
        rails: "todo",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-tabs--default"
      },
      {
        title: "transaction_card",
        description: "The Transaction Card displays customer transaction details in a compact view.",
        scss: "todo",
        rails: "todo",
        react: "todo",
        a11y: "todo",
        react_component_slug: "sage-transactioncard--default"
      },
      {
        title: "typeahead",
        description: "For search and 'goto' interactions",
        scss: "done",
        docs: "doing",
        rails: "todo",
        react: "done",
        a11y: "doing",
        react_component_slug: "sage-typeahead--default"
      },
      {
        title: "upload_card",
        description: "The Upload Card provides a visually pleasing lockup for a file upload field along with other helpful controls.",
        scss: "done",
        docs: "done",
        rails: "todo",
        react: "done",
        a11y: "todo",
        react_component_slug: "sage-uploadcard--default"
      },
    ]
  end

  # Sorts available components based on alphabet
  def sorted_sage_components
    sage_components.sort_by { |h| h[:title] }
  end

  # Archive of deprecated components
  def sage_deprecated_components
    [
      {
        title: "link_button",
        description: "",
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "no"
      },
      {
        title: "live_stream_wrapper",
        description: "A simple wrapper component for the Live stream application",
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "no"
      }
    ]
  end

  # Sorts deprecated components based on alphabet
  def sorted_sage_deprecated_components
    sage_deprecated_components.sort_by { |h| h[:title] }
  end

  # Full list of active and deprecated components
  def sage_all_components
    sage_components | sage_deprecated_components
  end

  # Sorts full list of active and deprecated components based on alphabet
  def sorted_sage_all_components
    sage_all_components.sort_by { |h| h[:title] }
  end

end
