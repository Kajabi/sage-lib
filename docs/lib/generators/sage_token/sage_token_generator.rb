class SageTokenGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_token

    # Style Variables
    style_file = "lib/sage-frontend/stylesheets/system/tokens/_#{file_name}.scss"
    style_include_file = "lib/sage-frontend/stylesheets/system/index.scss"
    style_include_line = "// Variable Tokens"
    # Create Style File
    template "style.scss", style_file
    # Include Style File
    gsub_file style_include_file, /(#{Regexp.escape(style_include_line)})/mi do |match|
      "#{match}\n@import \"tokens/#{file_name}\";"
    end

    # Markup Variables
    markup_include_file = "app/helpers/tokens_helper.rb"
    markup_include_line = "def sage_tokens\n      ["
    # Include Markup File
    gsub_file markup_include_file, /(#{Regexp.escape(markup_include_line)})/mi do |match|
      "#{match}\n        {\n          category: \"#{file_name}\",\n          tokens: [\n            { name: \"default\" },\n          ]\n        },"
    end

  end
end
