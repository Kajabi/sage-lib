module SageComponentHelper
  def sage_component(component, attributes, &block)
    validate_sage_component_attributes(component, attributes)

    component.new({
      context: self,
      content: block_given? ? capture(&block) : nil
    }.merge(attributes)).render
  end

  def sage_component_section(name, &block)
    content_for "sage_#{name}".to_sym, flush: true, &block
  end

  private

  def validate_sage_component_attributes(component, attributes)
    return if Rails.env.production?
    require "classy_hash"

    begin
      ClassyHash.validate(attributes, component::ATTRIBUTE_SCHEMA, strict: false, full: true)
    rescue ClassyHash::SchemaViolationError => e
      raise SageRails::SageComponentAttributeSchemaViolation.new(component, attributes_attempted: attributes, message: e.message)
    end
  end
end
