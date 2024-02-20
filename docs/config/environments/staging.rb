require Rails.root.join("config/environments/production")

Rails.application.configure do
  # Storybook deploy url to differentiate in different environments
  config.storybook_root_url = "https://sage-lib-storybook.staging.kajabi.farm/?path=/docs/"

  # Sassdocs deploy url to differentiate in different environments
  config.sassdocs_root_url = "https://sage-lib-sassdocs.staging.kajabi.farm/pages/index"
end
