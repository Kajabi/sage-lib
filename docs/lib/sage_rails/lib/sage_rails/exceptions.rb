module SageRails
  class SageComponentAttributeSchemaViolation < StandardError
    def initialize(sage_component, attributes_attempted: {}, message: "")
      error_messages = [
        "#{sage_component.name}\n#{attributes_attempted.pretty_inspect}",
        "Schema Violation Message:\n#{message}",
        "#{sage_component.name}::ATTRIBUTE_SCHEMA:\n#{sage_component::ATTRIBUTE_SCHEMA.pretty_inspect}",
      ]

      super(error_messages.join("\n\n"))
    end
  end
end
