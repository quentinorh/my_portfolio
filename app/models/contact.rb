class Contact < MailForm::Base
  attribute :name,      validate: true
  attribute :email,     validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname,  captcha: true
  validates :name, :email, :message, :nickname, presence: true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Message du formulaire",
      :to => "quentin.orhant@mailo.fr",
      :from => %("#{name}" <#{email}>)
    }
  end
end
