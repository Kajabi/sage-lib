require "pp"

module ApplicationHelper

  def current_page_experiences?
    current_page?(pages_experiences_path(:onboarding)) || (params[:title] && current_page?(pages_experiences_path(params[:title])))
  end

  def current_page_design?
    current_page?(pages_design_path(:color)) || (params[:title] && current_page?(pages_design_path(params[:title])))
  end

  def current_page_layout?
    current_page?(pages_layout_path(:container)) || (params[:title] && current_page?(pages_layout_path(params[:title])))
  end

  def current_page_components?
    current_page?(pages_components_path) || (params[:title] && current_page?(pages_component_path(params[:title])))
  end

  def storybook_url(slug)
    "#{Rails.application.config.storybook_root_url}#{slug}"
  end

end
