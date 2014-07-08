class AdminMailer < ActionMailer::Base

  default from: "no-reply@top_secret_org.gov"

  def report
    @number_of_users = rand(10000)
    mail(to: 'admin@myapp.com', subject: 'Report of users in our DB')
  end

end
