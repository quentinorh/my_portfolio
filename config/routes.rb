Rails.application.routes.draw do
  devise_for :users
  resources :posts
  root to: "posts#index", as: :tagged
  get "admin", to: "pages#admin"
end
