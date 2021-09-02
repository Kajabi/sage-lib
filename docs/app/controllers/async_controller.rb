class AsyncController < ApplicationController
  def show
    render params[:template], layout: "async"
  end
end
