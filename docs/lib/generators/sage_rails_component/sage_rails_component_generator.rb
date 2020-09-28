class SageRailsComponentGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  argument :attributes, type: :array, default: [], banner: "attribute"

  def create_sage_component
    # Markup Variables
    markup_file = "lib/sage_rails/app/views/sage_components/_sage_#{file_name}.html.erb"
    # Create Markup File
    template "markup.html.erb", markup_file
    # Component Variables
    component_file = "lib/sage_rails/app/sage_components/sage_#{file_name}.rb"
    # Create Component File
    template "component.rb", component_file
  end

  private

  def initialize_attributes
    attributes.map { |attr| "attr_accessor :#{attr.name}" }.join("\n  ")
  end

  def utilize_attributes
    attributes.map { |attr| "<%= component.#{attr.name} %>" }.join("\n  ")
  end

end
