module SageComponentHelper
  def sage_component(component, props, &block)
    component.new({
      context: self,
      content: block_given? ? capture(&block) : nil
    }.merge(props)).render
  end

  def sage_component_section(name, &block)
    content_for "sage_#{name}".to_sym, flush: true, &block
  end
end
