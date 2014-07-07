class SitesController < ApplicationController

  def home
    @event = Event.new
  end

  def places
      respond_to do |format|
        format.html do
          render :home
        end
        format.json do
          render json: {name: 'Landon'}
        end
      end
    end
end
