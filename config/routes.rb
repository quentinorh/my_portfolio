Rails.application.routes.draw do
  devise_for :users
  # root 'posts#index'
  resources :posts

  # root "pages#home"
  root to: "posts#index", as: :tagged


end
