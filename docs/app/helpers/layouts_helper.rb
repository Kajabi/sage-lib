module LayoutsHelper
  ########################################################
  # STATUS KEY
  # Done : done
  # In Progress : doing
  # To-do : todo
  # Not applicable : no
  # Deprecated : stop
  ########################################################

  # Lists out all the available sage layouts
  def sage_layouts
    [
      # Sage Layouts
      {
        title: "container",
        description: "For a simple responsive content wrapper.",
        status: "done",
        react_layout_slug: "sage-grid--default",
      },
      {
        title: "frame",
        description: "For building compound micro-layouts.",
        status: "todo",
      },
      {
        title: "tile",
        description: "For setting sets of patterned content in even rows and columns.",
        status: "todo",
      },
      {
        title: "sidecar",
        description: "For setting main content beside tangentialy content.",
        status: "todo",
      },
    ]
  end

  # Sorts available layouts based on alphabet
  def sage_layouts_sorted
    sage_layouts.sort_by { |h| h[:title] }
  end

  def get_sage_layout_by_title(title)
    sage_layouts.select { |layout| layout[:title] == title }[0]
  end

end
