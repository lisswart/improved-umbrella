Rails.application.routes.draw do
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  patch '/users/:id', to: 'users#update'
  get '/users', to: 'users#index'
  
  get '/books', to: 'books#index'
  get '/books/:id', to: 'books#show'
  post '/books', to: 'books#create'
  patch '/books/:id', to: 'books#update'

  post '/authors', to: 'authors#create'
  get '/authors', to: 'authors#index'
  get '/authors', to: 'authors#show'
  patch '/authors', to: 'authors#update'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
