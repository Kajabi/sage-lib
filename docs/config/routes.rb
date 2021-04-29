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
  get 'pages/components'
  get 'pages/component/:title', to: 'pages#component', as: 'pages_component'
  get 'pages/utilities'
  get 'pages/status'
  get 'pages/sandbox'

end
