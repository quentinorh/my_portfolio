Rails.application.routes.draw do
  resources :photos
  devise_for :users
  resources :posts do
    member do
      patch :delete_photo
    end
  end
  root to: "posts#index", as: :tagged
  resources :contacts, only: [:new, :create]
  get 'contact', to: 'contacts#new', as: 'contact'
  get 'contacts/sent'
end
