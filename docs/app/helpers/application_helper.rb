module ApplicationHelper

  def current_page_foundations?
    current_page?(pages_foundation_path(:ux_values)) || (params[:title] && current_page?(pages_foundation_path(params[:title])))
  end

  def current_page_content?
    current_page?(pages_content_path(:voice_tone)) || (params[:title] && current_page?(pages_content_path(params[:title])))
  end

  def current_page_experiences?
    current_page?(pages_experiences_path(:onboarding)) || (params[:title] && current_page?(pages_experiences_path(params[:title])))
  end
  
  def current_page_design?
    current_page?(pages_design_path(:token)) || (params[:title] && current_page?(pages_design_path(params[:title])))
  end

  def current_page_layout?
    current_page?(pages_layout_path(:token)) || (params[:title] && current_page?(pages_layout_path(params[:title])))
  end

  def current_page_elements?
    current_page?(pages_elements_path) || (params[:title] && current_page?(pages_element_path(params[:title])))
  end

  def current_page_objects?
    current_page?(pages_objects_path) || (params[:title] && current_page?(pages_object_path(params[:title])))
  end

end
