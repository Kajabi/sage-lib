class SageTokenGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_token

    # Style Variables
    style_file = "../packages/sage-assets/lib/stylesheets/tokens/_#{file_name}.scss"
    style_include_file = "../packages/sage-assets/lib/stylesheets/tokens/_index.scss"
    style_include_line = "// Variable Tokens"
    # Create Style File
    template "style.scss", style_file
    # Include Style File
    gsub_file style_include_file, /(#{Regexp.escape(style_include_line)})/mi do |match|
      "#{match}\n@import \"#{file_name}\";"
    end

  end
end
