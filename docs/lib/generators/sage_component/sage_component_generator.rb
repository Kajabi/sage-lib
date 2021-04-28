class SageComponentGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  argument :attributes, type: :array, default: [], banner: "attribute"

  def create_sage_component

    # Generate the rails component

    # Markup Variables
    template "markup.html.erb", "lib/sage_rails/app/views/sage_components/_sage_#{file_name}.html.erb"
    # Component Variables
    template "component.rb", "lib/sage_rails/app/sage_components/sage_#{file_name}.rb"


    # Generate the stylesheet

    # Create Style File
    template "style.scss", "../packages/sage-assets/lib/stylesheets/components/_#{file_name}.scss"
    # Include Style File
    gsub_file "../packages/sage-assets/lib/stylesheets/index.scss", /(#{Regexp.escape("// Components")})/mi do |match|
      "#{match}\n@import \"components/#{file_name}\";"
    end


    # Generate the Preview and documentation files

    # Include component in helper
    gsub_file "app/helpers/components_helper.rb", /(#{Regexp.escape("# Sage Generated Components")})/mi do |match|
      "#{match}\n        {\n          title: \"#{file_name}\",\n          description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\", \n          scss: \"todo\",\n          rails: \"todo\",\n          react: \"todo\",\n          a11y: \"todo\",\n        },"
    end
    # Preview for documentation
    template "preview.html.erb", "app/views/examples/components/#{file_name}/_preview.html.erb"
    # Props
    template "props.html.erb", "app/views/examples/components/#{file_name}/_props.html.erb"
    # Rules Do
    template "rules_do.html.erb", "app/views/examples/components/#{file_name}/_rules_do.html.erb"
    # Rules Dont
    template "rules_dont.html.erb", "app/views/examples/components/#{file_name}/_rules_dont.html.erb"
  end

  private

  def initialize_attributes
    attributes.map { |attr| "#{attr.name}: [:optional, String]" }.join(",\n    ")
  end

  def use_attributes
    attributes.map { |attr| "#{attr.name}: \"#{attr.name}\"" }.join(",\n  ")
  end

  def implement_attributes
    attributes.map { |attr| "<%= component.#{attr.name} %>" }.join("\n  ")
  end
end
