Rails.application.routes.draw do
  resources :photos
  devise_for :users
  resources :posts do
    member do
      patch :delete_photo
    end
  end
  root to: "posts#index", as: :tagged
  resources :contacts, only: [:create]
  # get "contact", to: "pages#contact"
  get "contact", to: "contacts#new"
  # get "admin", to: "pages#admin"
end
