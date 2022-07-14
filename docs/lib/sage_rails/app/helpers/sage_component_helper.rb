module SageComponentHelper
  def sage_component(component, attributes, &block)
    relevant_attributes = attributes.slice(*component::ATTRIBUTE_SCHEMA.keys)
    validate_sage_component_attributes(component, relevant_attributes)

    component.new({
      context: self,
      content: block_given? ? capture(&block) : nil
    }.merge(relevant_attributes)).render
  end

  def sage_component_section(name, &block)
    content_for "sage_#{name}".to_sym, flush: true, &block
  end

  #
  # Returns a series of formatted strings tha tcontain breakpoints and the provided value.
  # value: the string value to be added into the template where the :value symbol is added.
  # This helper can be used to gnereate strings such as CSS styles or classnames.
  #
  # value_condition: an optional condition to test the value against.
  #   If this condition is `true` the `value` is used in the template;
  #   otherwise the `value_fallabck` is used instead.
  #   If this remains at the default `nil` then the `value` is assumed to be a component property
  #   and is tested for its presence. If it is present its value is used, but if not,
  #   the `value_fallback` is used.
  # value_fallback: an alternate to be used in the template if either the value is not present
  #   or the value condition fails.
  # template: the templatized string containing placeholders for the `:breakpoint` and `:value`
  #   to be included
  #
  def sage_component_responsive_settings(value: nil, value_condition: nil, value_fallback: nil, template: "")
    
    # 1. Check for presence of `value_condition`
    if value_condition != nil
      # - value_condition allows for a custom validation of the value
      value = value_condition ? value : value_fallback
    else
      # - default is to check for the value's presence as a property of the component
      value = value.present? ? value : value_fallback
    end
    
    # 2. Build an array of classenames
    classnames = []

    # - Ensure we have a hash to start from as some values will allow a string
    #   as well as a hash of breakpoint ranges
    hash = value && value.is_a?(Hash) ? value : { default: value }
    # - Check each key provided in the has to add the specified classnames
    hash.keys.each do | key |
      if hash[key]
        # - Saturate the provided template with the breakpoint and value provided
        classnames.push(template % {
          breakpoint: key == :default ? "" : "#{key.to_s.dasherize()}-",
          value: hash[key]
        })
      end
    end

    # 3. Flatten the array into a string of classnames and return it
    classnames.join(" ").gsub(/\s+/, " ")
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
