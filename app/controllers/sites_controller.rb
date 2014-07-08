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

  def contact
    if request.post?
      NotificationMailer.contact_form(params).deliver
      redirect_to root_path
    end
  end

  def login
    UserMailer.welcome('landonwest5@gmail.com').deliver
    redirect_to root_path
  end

  def report
    AdminMailer.report.deliver
    redirect_to root_path
  end

end
