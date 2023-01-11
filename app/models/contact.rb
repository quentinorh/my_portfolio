class Contact < MailForm::Base
  attribute :name,      validate: true
  attribute :email,     validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   validate:true
  attribute :nickname,  captcha: true

  def headers
    {
      to: "quentin.orhant@mailo.fr", # change this to be the email you want sent to
      subject: "Message contact Portfolio",
      from: "contact@quentino.io",  # change this to be the email it is coming from
      reply_to: %("#{name}" <#{email}>)
    }
  end
end
