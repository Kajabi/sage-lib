
class SageComponent
  include ActiveModel::Model

  attr_accessor :context
  attr_accessor :content

  ATTRIBUTE_SCHEMA = {
    test_id: [:optional, NilClass, String],
    component_attributes: [:optional, NilClass, Hash],
    html_attributes: [:optional, NilClass, Hash],
    spacer: [:optional, NilClass, SageSchemas::SPACER],
    css_classes: [:optional, NilClass, String],
    content: [:optional, NilClass, String],
  }

  def generated_css_classes
    @generated_css_classes ||= ""
  end

  def generated_component_attributes
    @generated_component_attributes ||= ""
  end

  def generated_html_attributes
    @generated_html_attributes ||= ""
  end

  def css_classes
    @css_classes ||= ""
  end

  def css_classes=(classes_string)
    @css_classes = classes_string
    generated_css_classes << " #{classes_string}"
  end

  def render
    context.render(
      partial: "sage_components/#{template_path}",
      locals: { component: self },
      formats: :html
    ).tap { cleanup_section_vars }
  end

  # SageComponent Universal Spacer Attribute
  #   Accepts a :spacer hash that creates custom spacing by adding Sage css class
  #   with a direction and a spacing value (`sage-spacer-bottom-lg`).
  #
  #   USAGE:
  #   sage_component <CLASSNAME>, { spacer: { bottom: :lg } }
  def spacer
    @spacer ||= {}
  end

  def spacer=(spacer_hash)
    @spacer = spacer_hash
    spacer_hash.each do |key, value|
      generated_css_classes << " sage-spacer-#{key}#{(value != :md and value != "md") ? "-#{value}" : ""}"
    end
  end

  # SageComponent Custom Event Attributes
  #   Accepts a :component_attributes has that generates the additional
  #   attributes on the element and not the parent container.
  #
  #   USAGE:
  #   sage_component <CLASSNAME>, { component_attributes: { "onChange": "handleChange(this)" } }
  #   sage_component <CLASSNAME>, { component_attributes: { "onChange": "alert('hello world')" } }
  def component_attributes
    @component_attributes ||= {}
  end

  def component_attributes=(component_attributes_hash)
    @component_attributes = component_attributes_hash
    component_attributes_hash.each do |key, value|
      generated_component_attributes << " #{key}=\"#{value.to_s}\""
    end
  end

  # SageComponent Custom Html Attributes
  #   Accepts a :html_attributes hash that generates additional html attributes for a component.
  #
  #   USAGE:
  #   sage_component <CLASSNAME>, { html_attributes: { "id": "my-cool-identifier" } }
  def html_attributes
    @html_attributes ||= {}
  end

  def html_attributes=(html_attributes_hash)
    @html_attributes = html_attributes_hash
    html_attributes_hash.each do |key, value|
      generated_html_attributes << " #{key}=\"#{value.to_s}\""
    end
  end

  def test_id
    @test_id ||= nil
  end

  def test_id=(id_string)
    @test_id = id_string
    if id_string
      generated_html_attributes << " data-kjb-element=\"#{id_string}\""
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

  def self.set_attribute_schema(attributes)
    attr_accessor(*attributes.keys)
    self.const_set("ATTRIBUTE_SCHEMA", self.superclass::ATTRIBUTE_SCHEMA.deep_merge(attributes))
  end
end
