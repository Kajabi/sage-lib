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
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done"
      },
      {
        title: "button",
        description: "Standard button styling with multiple display options. Can be applied on both button and link elements.",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done"
      },
      {
        title: "checkbox",
        description: "Checkboxes provide users with selectable options like toggling a single setting or selecting multiple options from a list.",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "todo",
        rails: "no",
        react: "no",
        a11y: "todo"
      },
      {
        title: "choice",
        description: "A radio button tab for making a choice. To be used inside a tabs object.",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "label",
        description: "Labels show concise metadata or indicate status in a compact format.",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done"
      },
      {
        title: "link",
        description: "While links have default styling in the app, some links deserve a little more ❤️",
        use_legacy_html_code_source: true,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done"
      },
      {
        title: "lists",
        description: "Sage lists provide a few styling alternatives for unstyled and inline formatting.",
        use_legacy_html_code_source: true,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done",
      },
      {
        title: "tab",
        description: "A tab button to be used inside a tabs object",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "table",
        description: "Basic table element",
        use_legacy_html_code_source: false,
        scss: "doing",
        docs: "doing",
        rails: "done",
        react: "todo",
        a11y: "done"
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
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "no"
      },
      {
        title: "live_stream_wrapper",
        description: "A simple wrapper element for the Live stream application",
        use_legacy_html_code_source: true,
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
