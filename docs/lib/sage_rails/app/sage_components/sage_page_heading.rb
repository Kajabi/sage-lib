class SagePageHeading < SageComponent
  set_attribute_schema({
    title: [:optional, String],
    secondary_text: [:optional, String],
    help_title: [:optional, String],
    help_link: [:optional, Hash],
    help_html: [:optional, String],
  })

  def sections
    %w(breadcrumbs page_heading_toolbar page_heading_actions page_heading_intro help_content)
  end

end
