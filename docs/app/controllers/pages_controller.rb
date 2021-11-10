class PagesController < ApplicationController
  def index
    render(layout: 'home')
  end

  def foundation
    render params[:title]
  end

  def mock
    @alias = params[:alias]

    render(layout: 'mocks')
  end

  def mocks
    render(layout: 'mocks')
  end

  def patterns
    if params[:segment] == "grid" || params[:segment] == "panels_cards"
      render params[:segment]
    else
      render("pattern", segment: params[:segment])
    end
  end
  
  def helpers
    render params[:title]
  end
  
  def component
    @title = params[:title]
  end
  
  def components
  end
  
  def sandbox
    render(layout: 'sandbox')
  end
  
  # archives
  
  def content
    render params[:title]
  end

  def design
    render params[:title]
  end
  
  def experiences
    render params[:title]
  end
  
  def interactions
    render params[:title]
  end

  def utilities
  end

  # Generator Pages
  def status
    render(layout: 'full_page')
  end

  def support
    render(layout: 'full_page')
  end

  def breakout
    @type = params[:type]
    @title = params[:title]

    render(layout: 'breakout')
  end
end
