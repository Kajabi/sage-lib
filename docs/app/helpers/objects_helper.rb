module ObjectsHelper
  ########################################################
  # STATUS KEY
  # Done : done
  # In Progress : doing
  # To-do : todo
  # Not applicable : no
  # Deprecated : stop
  ########################################################

  # Lists out all the available sage objects
  def sage_objects
    [
      # Sage Generated Objects
      {
        title: "avatar",
        description: "The Avatar object shows a user's profile image in a circular frame and allows for a few helpful modifications for different uses.",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "no",
        react: "done",
        a11y: "todo"
      },
      {
        title: "assistant",
        description: "Page header with optional side menu toggle button.",
        use_legacy_html_code_source: true,
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "banner",
        description: "A banner that displays at the top of the page, used for systemwide notifications and events.",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "doing",
        a11y: "done"
      },
      {
        title: "billboard",
        description: "A billboard is composed of a full-width background image, a title, and supporting copy.",
        use_legacy_html_code_source: true,
        scss: "done",
        docs: "done",
        rails: "doing",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "card",
        description: "A versatile smaller container for grouping content within panels",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "doing",
        a11y: "done"
      },
      {
        title: "panel",
        description: "Panels are used as multi-purpose containers for a variety of content.",
        use_legacy_html_code_source: false,
        scss: "done",
        docs: "done",
        rails: "done",
        react: "done",
        a11y: "done"
      },
      {
        title: "pagination",
        description: "Pagination is used for splitting up results into several pages and provides controls for navigating to the next or previous page.",
        use_legacy_html_code_source: true,
        scss: "done",
        docs: "done",
        rails: "todo",
        react: "todo",
        a11y: "todo"
      },
      {
        title: "tabs",
        description: "Tabs organize related content across screens, data sets, and can be used for navigation to related destinations.",
        use_legacy_html_code_source: false,
        scss: "todo",
        docs: "todo",
        rails: "todo",
        react: "todo",
        a11y: "todo"
      },
    ]
  end

  # Sorts available objects based on alphabet
  def sorted_sage_objects
    sage_objects.sort_by { |h| h[:title] }
  end

  # Archive of deprecated objects
  def sage_deprecated_objects
    [
      {
        title: "old_card",
        description: "A card presents content and can guide the user toward a related action.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "stop",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_active_mic",
        description: "The Live Active Mic icon is an animatable icon that shows a fill color rise and fall in the icon shape based on a given volume level.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_option_menu",
        description: "Live option menu is an accessible contextual menu to be used within the Live feature set. When the user clicks on an anchor the menu appears and stays until the user clicks somewhere else or on a given command from the menu.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_profile_card",
        description: "Live Profile Cards are used to show the users logged into a Live session. Their role in the session will affect what content is visible and whether or not they are also given a ring around their avatar. They are organized into groups based on their role in the meeting.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_stream_control",
        description: "The Live Stream Controls are a special class of button used in the frame for Live Streams.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_stream_footer",
        description: "Footer component for the Live stream application. Contains an \"awake\" variation as well as the constant form. Must be nested within a wrapper as shown below.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_stream_header",
        description: "Header component for the Live stream application. Contains an \"awake\" variation as well as the constant form. Must be nested within a wrapper as shown below.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_user_control",
        description: "The Live User Control is a button class that presents a variety of icons and interactive states related to the Live feature's user controls.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
      {
        title: "live_stream_video_grid",
        description: "Adds the video grid setup for live stream. Toggle the `--fullscreen-demo` modifier on the wrapper to see at full screen.",
        use_legacy_html_code_source: true,
        scss: "stop",
        docs: "stop",
        rails: "no",
        react: "stop",
        a11y: "stop"
      },
    ]
  end

  # Sorts deprecated objects based on alphabet
  def sorted_sage_deprecated_objects
    sage_deprecated_objects.sort_by { |h| h[:title] }
  end

  # Full list of active and deprecated objects
  def sage_all_objects
    sage_objects | sage_deprecated_objects
  end

  # Sorts full list of active and deprecated objects based on alphabet
  def sorted_sage_all_objects
    sage_all_objects.sort_by { |h| h[:title] }
  end

end
