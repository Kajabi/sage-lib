class SagePageHeading < SageComponent
  set_attribute_schema({
    help_html: [:optional, NilClass, String],
    help_link: [:optional, NilClass, Hash],
    help_title: [:optional, NilClass, String],
    secondary_text: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
    title_html: [:optional, NilClass, String],
  })

  def sections
    %w(breadcrumbs page_heading_toolbar page_heading_actions page_heading_intro page_heading_image)
  end

end
