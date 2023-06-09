module NavHelper
  def page_active(page_action, page_controller = "pages")
    return if current_page?(controller: 'pages', action: 'index') || current_page?(controller: 'pages', action: 'search')
    current_page?(controller: page_controller, action: page_action)
  end
end
