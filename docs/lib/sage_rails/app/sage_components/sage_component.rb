class SageComponent
  include ActiveModel::Model
  attr_accessor :context
  attr_accessor :content

  def generated_css_classes
    @generated_css_classes ||= ""
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
      generated_css_classes << " sage-spacer-#{key}-#{value}"
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
