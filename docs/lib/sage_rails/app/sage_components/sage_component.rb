class SageComponent
  include ActiveModel::Model
  attr_accessor :context
  attr_accessor :content

  def generated_css_classes
    @generated_css_classes ||= ""
  end

  def generated_html_attributes
    @generated_html_attributes ||= ""
  end

  def render
    context.render(
      partial: "sage_components/#{template_path}",
      locals: { component: self }
    ).tap { cleanup_section_vars }
  end

  # SageComponent Universal Spacer Attribute
  #   Accepts a :spacer hash that creates custom spacing by adding Sage css class
  #   with a direction and a spacing value (`sage-spacer-bottom-lg`).
  #
  #   USAGE:
  #   sage_component <CLASSNAME>, { spacer: { bottom: :lg } }
  def spacer=(spacer_hash)
    raise ArgumentError.new("SageComponent expects :spacer to be a hash") unless spacer_hash.is_a?(Hash)

    spacer_hash.each do |key, value|
      generated_css_classes << " sage-spacer-#{key}#{value != :md ? "-#{value}" : ""}"
    end
  end

  # SageComponent Custom Html Attributes
  #   Accepts a :html_attributes hash that generates additional html attributes for a component.
  #
  #   USAGE:
  #   sage_component <CLASSNAME>, { html_attributes: { "id": "my-cool-identifier" } }
  def html_attributes=(html_attributes_hash)
    raise ArgumentError.new("SageComponent expects :html_attributes to be a hash") unless html_attributes_hash.is_a?(Hash)

    html_attributes_hash.each do |key, value|
      generated_html_attributes << " #{key}=\"#{value.to_s}\""
    end
  end

  private

  def sections
    []
  end

  def cleanup_section_vars
    sections.each do |section_name|
      context.view_flow.set("sage_#{section_name}".to_sym, '')
    end
  end

  def template_path
    self.class.to_s.underscore
  end
end
