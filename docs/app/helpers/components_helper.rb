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
        title: "alert",
        description: "Alerts are used to indicate user-driven notifications.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-alert--dismissable-alert",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6989%253A21570",
      },
      {
        title: "assistant",
        description: "Page header with optional side menu toggle button.",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6989%253A21590",
      },
      {
        title: "avatar",
        description: "The Avatar component shows a user's profile image in a circular frame and allows for a few helpful modifications for different uses.",
        scss: "done",
        docs: "done",
        rails: "no",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-avatar--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6989%253A21606",
      },
      {
        title: "badge",
        description: "",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-badge--default",
        figma_embed: "",
      },
      {
        title: "banner",
        description: "A banner that displays at the top of the page, used for systemwide notifications and events.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21606",
      },
      {
        title: "billboard",
        description: "A billboard is composed of a full-width background image, a title, and supporting copy.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        figma_embed: "",
      },
      {
        title: "breadcrumbs",
        description: "Breadcrumbs provide a sense of where we are in the site structure with hyperlinks to previous areas in that structure. Our component also provides a specific \"Back link\" variation",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-breadcrumbs--single-item",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21623",
      },
      {
        title: "button",
        description: "Standard button styling with multiple display options. Can be applied on both button and link components.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-button--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21637",
      },
      {
        title: "card",
        description: "A versatile smaller container for grouping content within panels",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "doing",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-card--default",
        figma_embed: "",
      },
      {
        title: "card_highlight",
        description: "A special highlight edge to apply to Card components.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-card--card-highlight",
        figma_embed: "",
      },
      {
        title: "carousel",
        description: "A wrapper for Tiny Slider for slideshow/carousel layouts. (http://ganlanyuan.github.io/tiny-slider/)",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-carousel--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fc8Wj1s2jJJriXqZf016Tw3%2FNext-Best-Actions%3Fnode-id%3D1973%253A13595"
      },
      {
        title: "catalog_item",
        description: "The Catalog Item displays Products, Offers, and other resources with a large amount of detail to display in list form.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21711",
      },
      {
        title: "chart_legend",
        description: "Sage charts legend are used primarily in React-based Recharts bar charts when multiple bars are used for a given data point.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-chart--multiple-bars",
        figma_embed: "",
      },
      {
        title: "chart_summary",
        description: "Chart summaries are used primarily in React-based Recharts diagrams to display summary information with Sage type styling.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-chart--donut",
        figma_embed: "",
      },
      {
        title: "checkbox",
        description: "Checkboxes provide users with selectable options like toggling a single setting or selecting multiple options from a list.",
        scss: "done",
        docs: "todo",
        rails: "no",
        react: "no",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-checkbox--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21776",
      },
      {
        title: "choice",
        description: "A radio button tab for making a choice. To be used inside a tabs component.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-choice--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21795",
      },
      {
        title: "container",
        description: "For setting contents of varying complexity inside a fixed space.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-grid--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3435%253A19",
      },
      {
        title: "copy_text",
        description: "A small set of components to use in places where \"copy\" text is provided such as in a Copy Button or a block of text to be copied elsewhere.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-copytext--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2FSage-3-for-Admin%3Fnode-id%3D4195%253A20283",
      },
      {
        title: "data_card",
        description: "",
        scss: "todo",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "doing",
        react_component_slug: "sage-datacard--default",
        figma_embed: "",
      },
      {
        title: "description",
        description: "A description is composed of title and data content and is structured as a definition list.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "doing",
        react_component_slug: "sage-description--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2FSage-3-for-Admin%3Fnode-id%3D19727%253A25817",
      },
      {
        title: "dot",
        description: "Dots provide a subtle color cue to place beside text or other elements.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-dot--default",
        figma_embed: nil, # TODO: We'll have a link for this in the new design system
      },
      {
        title: "drawer",
        description: "A drawer is a component that animates in, over content, to provide more information. A drawer is composed of a header and a content area.",
        scss: "todo",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-drawer--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2FSage-3-for-Admin%3Fnode-id%3D14488%253A23019",
      },
      {
        title: "dropdown",
        description: "Sage dropdown",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-dropdown--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3435%253A17",
      },
      {
        title: "dynamic_select",
        description: "A description is about the dynamic select.",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        figma_embed: "",
      },
      {
        title: "empty_state",
        description: "The Empty State is displayed for main application features that have never been interacted with before. The Empty State is also used for smaller features in the app that primarily focus on data entry and have no data to show.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-emptystate--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D9%253A156",
      },
      {
        title: "expandable_card",
        description: "Card that can be expanded and collapsed in order to display additional content.",
        scss: "todo",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-expandablecard--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A23010",
      },
      {
        title: "feature_toggle",
        description: "Feature toggle",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6340%253A20675",
      },
      {
        title: "form_input",
        description: "Basic text input form fields with 'floating' labels",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-input--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21822",
      },
      {
        title: "form_section",
        description: "A form section genera11y consists of a text section to provide users with instruction, guidance, or related information along with a secondary panel that may contain form inputs and/or related general content.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-formsection--default",
        figma_embed: "",
      },
      {
        title: "form_select",
        description: "The form select presents a selectable menu of options. The options within the menu are represented by <option> elements.",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-select--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21850",
      },
      {
        title: "form_textarea",
        description: "Basic text area input field with 'floating' label",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-textarea--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3435%253A9",
      },
      {
        title: "hero",
        description: "Pending",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A22262",
      },
      {
        title: "hint",
        description: "A hint is used to display non-critical informative text.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-hint--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A23073",
      },
      {
        title: "icon",
        description: "The Icon component displays a standalone icon with customizable options. Our library of icons is available under the #{link_to("Foundation's Icons page", pages_design_path(:icon))}.".html_safe,
        scss: "todo",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-icon--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3554%253A247",
      },
      {
        title: "icon_card",
        description: "A simple component that allows an icon to be rendered on a field with a unified color scheme applied.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-iconcard--default",
        figma_embed: "",
      },
      {
        title: "icon_list",
        description: "Icon lists allow for a richer formatting for bulleted lists of things including checkbox lists, feature lists, and more!",
        scss: "todo",
        docs: "todo",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-icon-list--default",
        figma_embed: "",
      },
      {
        title: "indicator",
        description: "A simple dot-styled position indicator bar. This is currently not intended to be used as navigation but only a visual indicator.",
        scss: "doing",
        docs: "doing",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        figma_embed: "",
      },
      {
        title: "input_group",
        description: "Allows inline grouping of text inputs with buttons",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "doing",
        figma_embed: "",
      },
      {
        title: "label",
        description: "Labels show concise metadata or indicate status in a compact format.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "doing",
        react_component_slug: "sage-label--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A23863",
      },
      {
        title: "link",
        description: "While links have default styling in the app, some links deserve a little more ❤️",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-link--primary",
        figma_embed: "",
      },
      {
        title: "list",
        description: "Set up neatly-formatted lists of content in bordered rows with some additional optional decorations.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-list--default",
        figma_embed: "",
      },
      {
        title: "lists",
        description: "Sage lists provide a few styling alternatives for unstyled and inline formatting.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        figma_embed: "",
      },
      {
        title: "loader",
        description: "Stylized loading animations for use with components",
        scss: "done",
        docs: "done",
        rails: "yes",
        react: "yes",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-loader--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsMbtLUHSt2vfKgKjyQ3052%2FSage%3Fnode-id%3D2738%253A23248",
      },
      {
        title: "media_tile",
        description: "Easily display a tile or set of tiles that showcase products, templates, or other media-based content.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-media-tile--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21709",
      },
      {
        title: "meter",
        description: "A horizontal display indicating the measurement of a known (finite) quantity",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        figma_embed: "",
      },
      {
        title: "modal",
        description: "Sage modal",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo",
        responsive: "todo",
        react_component_slug: "sage-modal--wired",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A23107",
      },
      {
        title: "nav",
        description: "Nav is a hierarchical, vertical navigation and can include nested menu items.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        responsive: "todo",
        a11y: "done",
        figma_embed: "",
      },
      {
        title: "nav_link",
        description: "These are links specifically defined within the Nav component",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        responsive: "todo",
        a11y: "done",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3371%253A9903",
      },
      {
        title: "next_best_action",
        description: "A specialized component that showcases a Call to Action we'd like the customer to take.",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-next-best-action--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fc8Wj1s2jJJriXqZf016Tw3%2FNext-Best-Actions%3Fnode-id%3D1973%253A13595"
      },
      {
        title: "page_heading",
        description: "Page headings are used at the top of pages and contain the title of the page along with optional breadcrumbs, help link, action buttons, toolbar, and intro text.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "doing",
        react_component_slug: "sage-pageheading--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A22232",
      },
      {
        title: "pagination",
        description: "Pagination is used for splitting up results into several pages and provides controls for navigating to the next or previous page.",
        scss: "done",
        docs: "done",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-pagination--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A22277",
      },
      {
        title: "panel",
        description: "Panels are used as multi-purpose containers for a variety of content.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-panel--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3435%253A3",
      },
      {
        title: "panel_controls",
        description: "Panel controls provides a unified interface for controlling lists inside of a panel.",
        scss: "doing",
        docs: "doing",
        rails: "doing",
        react: "todo",
        responsive: "todo",
        a11y: "doing",
        react_component_slug: "sage-panelcontrols--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A22247",
      },
      {
        title: "panel_figure",
        description: "Panel figures allow a veriety of options for display a graphic inside of a panel.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "doing",
        react_component_slug: "sage-panel--default",
        figma_embed: "",
      },
      {
        title: "popover",
        description: "Popovers open upon click to show information regarding the section. It has a header/subject, minimal information, and a link to learn more",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-popover--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A23138",
      },
      {
        title: "progress_bar",
        description: "Displays progress with a value",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        figma_embed: "",
      },
      {
        title: "property",
        description: "TO BE NAMED – Displays a metadata item for a resource.",
        scss: "done",
        docs: "todo",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-property--primary",
        figma_embed: "",
      },
      {
        title: "radio",
        description: "Radio components provide users a way to select only one option from a list of two or more options.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-radio--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A23906",
      },
      {
        title: "search",
        description: "A self-contained search form that can be used in isolation and inside of menus.",
        scss: "doing",
        docs: "doing",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-search--default",
        figma_embed: "",
      },
      {
        title: "sidebar",
        description: "The sidebar component is a fixed, vertical panel that typica11y displays navigation and/or page hierarchy.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        responsive: "todo",
        a11y: "done",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A22305",
      },
      {
        title: "sortable",
        description: "Sage sortable list",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-sortable--default",
        figma_embed: "",
      },
      {
        title: "stat_box",
        description: "Stat Boxes, for use in the CRM Dashboard, display important statistics for users to make informed decisions about their business.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-statbox--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21997",
      },
      {
        title: "status_icon",
        description: "Display the status of an item",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        figma_embed: "",
      },
      {
        title: "switch",
        description: "Checkbox or radio component styled to appear as a toggle",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-switch--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D7288%253A20303",
      },
      {
        title: "tab",
        description: "A tab button to be used inside a tabs component",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-tabs--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A22291",
      },
      {
        title: "table",
        description: "Basic table component",
        scss: "doing",
        docs: "doing",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-table--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3435%253A7",
      },
      {
        title: "tabs",
        description: "Tabs organize related content across screens, data sets, and can be used for navigation to related destinations.",
        scss: "todo",
        docs: "todo",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-tabs--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A22291",
      },
      {
        title: "tag",
        description: "Tags show concise metadata in a compact format.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-tag--default",
      },
      {
        title: "toast",
        description: "Displays a temporary notification to a user.",
        scss: "done",
        docs: "no",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-toast--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D3435%253A11",
      },
      {
        title: "toolbar",
        description: "Toolbars apply special formatting to supported elements for use as list controls and other similar places.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-toolbar--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%3A22248",
      },
      {
        title: "tooltip",
        description: "Tooltips display helpful text when users hover over an element.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        responsive: "todo",
        a11y: "todo",
        react_component_slug: "sage-tooltip--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A23154",
      },
      {
        title: "topbar",
        description: "The Topbar sits above all page content and contains breadcrumbs and the user menu.",
        scss: "done",
        rails: "done",
        react: "done",
        responsive: "done",
        a11y: "todo",
        react_component_slug: "sage-topbar--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsMbtLUHSt2vfKgKjyQ3052%2FSage-components%3Fnode-id%3D5026%253A22583",
      },
      {
        title: "transaction_card",
        description: "The Transaction Card displays customer transaction details in a compact view.",
        scss: "todo",
        rails: "todo",
        react: "todo",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-transactioncard--default",
        figma_embed: "",
      },
      {
        title: "typeahead",
        description: "For search and 'goto' interactions",
        scss: "done",
        docs: "doing",
        rails: "todo",
        react: "done",
        responsive: "todo",
        a11y: "doing",
        react_component_slug: "sage-typeahead--default",
        figma_embed: "",
      },
      {
        title: "upload_card",
        description: "The Upload Card provides a visually pleasing lockup for a file upload field along with other helpful controls.",
        scss: "done",
        docs: "done",
        rails: "todo",
        react: "done",
        responsive: "todo",
        a11y: "done",
        react_component_slug: "sage-uploadcard--default",
        figma_embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9Km09NjlZHYWsMP7EGT8tI%2F%255BWIP%255D-Sage-3-%25E2%2580%2594-Admin-Components%3Fnode-id%3D6999%253A21864",
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
      },
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
