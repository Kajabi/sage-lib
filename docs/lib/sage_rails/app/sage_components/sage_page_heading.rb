class SagePageHeading < SageComponent
  attr_accessor :title
  attr_accessor :link_text
  attr_accessor :link_url
  attr_accessor :help_link
  attr_accessor :secondary_text

  def sections
    %w(breadcrumbs page_heading_toolbar page_heading_actions page_heading_intro)
  end

end
