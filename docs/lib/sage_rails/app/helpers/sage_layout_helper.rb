module SageLayoutHelper
  def sage_layout(layout, attributes, &block)
    relevant_attributes = attributes.slice(*layout::ATTRIBUTE_SCHEMA.keys)
    validate_sage_layout_attributes(layout, relevant_attributes)

    layout.new({
      context: self,
      content: block_given? ? capture(&block) : nil
    }.merge(relevant_attributes)).render
  end

  def sage_layout_section(name, &block)
    content_for "sage_#{name}".to_sym, flush: true, &block
  end

  private

  def validate_sage_layout_attributes(layout, attributes)
    return if Rails.env.production?
    require "classy_hash"

    begin
      ClassyHash.validate(attributes, layout::ATTRIBUTE_SCHEMA, strict: false, full: true)
    rescue ClassyHash::SchemaViolationError => e
      raise SageRails::SageComponentAttributeSchemaViolation.new(layout, attributes_attempted: attributes, message: e.message)
    end
  end
end
