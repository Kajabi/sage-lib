class SagePageHeading < SageComponent
  set_attribute_schema({
    help_html: [:optional, String],
    help_link: [:optional, Hash],
    help_title: [:optional, String],
    secondary_text: [:optional, String],
    title: [:optional, String],
  })

  def sections
    %w(breadcrumbs page_heading_toolbar page_heading_actions page_heading_intro page_heading_image)
  end

end
