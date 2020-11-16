Rails.application.routes.draw do
  mount Lockup::Engine, at: "/lockup"

  root to: redirect("pages/index")
  get 'pages/breakout/:type/:title', to: 'pages#breakout', as: 'pages_breakout'

  get 'pages/index'
  get 'pages/foundations/:title', to: 'pages#foundation', as: 'pages_foundation'
  get 'pages/content/:title', to: 'pages#content', as: 'pages_content'
  get 'pages/experiences/:title', to: 'pages#experiences', as: 'pages_experiences'
  get 'pages/design/:title', to: 'pages#design', as: 'pages_design'
  get 'pages/layout/:title', to: 'pages#layout', as: 'pages_layout'
  get 'pages/getting_started'
  get 'pages/elements'
  get 'pages/element/:title', to: 'pages#element', as: 'pages_element'
  get 'pages/objects'
  get 'pages/object/:title', to: 'pages#object', as: 'pages_object'
  get 'pages/utilities'
  get 'pages/status'
  get 'pages/sandbox'

end
