module ElementsHelper
  ########################################################
  # STATUS KEY
  # Done : done
  # In Progress : doing
  # To-do : todo
  # Not applicable : no
  # Deprecated : stop
  ########################################################

  # Lists out all the available sage elements
  def sage_elements
    [
      # Sage Generated Elements
      {
        title: "breadcrumbs",
        description: "Breadcrumbs provide a sense of where we are in the site structure with hyperlinks to previous areas in that structure. Our element also provides a specific \"Back link\" variation",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
      },
      {
        title: "button",
        description: "Standard button styling with multiple display options. Can be applied on both button and link elements.",
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
        a11y: "done"
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
        description: "A radio button tab for making a choice. To be used inside a tabs object.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo"
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
        title: "icon_card",
        description: "A simple component that allows an icon to be rendered on a field with a unified color scheme applied.",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
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
        a11y: "done"
      },
      {
        title: "link",
        description: "While links have default styling in the app, some links deserve a little more ❤️",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done"
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
        description: "Stylized loading animations for use with elements or objects",
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
        a11y: "todo"
      },
      {
        title: "radio",
        description: "Radio elements provide users a way to select only one option from a list of two or more options.",
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
        a11y: "doing"
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
        description: "Checkbox or radio element styled to appear as a toggle",
        scss: "done",
        docs: "done",
        rails: "done",
        react: "no",
        a11y: "todo",
        react_component_slug: "sage-switch--default"
      },
      {
        title: "tab",
        description: "A tab button to be used inside a tabs object",
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "table",
        description: "Basic table element",
        scss: "doing",
        docs: "doing",
        rails: "done",
        react: "todo",
        a11y: "done",
        react_component_slug: "sage-table--default"
      },
      {
        title: "toast",
        description: "Displays a temporary notification to a user based an interaction.",
        scss: "done",
        docs: "no",
        rails: "todo",
        react: "todo",
        a11y: "todo"
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
    ]
  end

  # Sorts available elements based on alphabet
  def sorted_sage_elements
    sage_elements.sort_by { |h| h[:title] }
  end

  # Archive of deprecated elements
  def sage_deprecated_elements
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
        description: "A simple wrapper element for the Live stream application",
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "no"
      }
    ]
  end

  # Sorts deprecated elements based on alphabet
  def sorted_sage_deprecated_elements
    sage_deprecated_elements.sort_by { |h| h[:title] }
  end

  # Full list of active and deprecated elements
  def sage_all_elements
    sage_elements | sage_deprecated_elements
  end

  # Sorts full list of active and deprecated elements based on alphabet
  def sorted_sage_all_elements
    sage_all_elements.sort_by { |h| h[:title] }
  end

end
