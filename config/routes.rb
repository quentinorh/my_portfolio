Rails.application.routes.draw do
  devise_for :users

  resources :posts

  # root "pages#home"
  root to: "posts#index", as: :tagged
  # root 'posts#index'
  get "admin", to: "pages#admin"
end
