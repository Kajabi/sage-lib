class PagesController < ApplicationController
  def index
  end

  def foundations
    render params[:title]
  end

  def element
    @title = params[:title]
  end

  def elements
  end

  def objects
  end

  def object
    @title = params[:title]
  end

  def sandbox
    render(layout: 'sandbox')
  end

  def utilities
  end

  # Generator Pages
  def status
  end

  def breakout
    @type = params[:type]
    @title = params[:title]

    render(layout: 'breakout')
  end
end
