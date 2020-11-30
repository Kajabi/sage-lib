module SageRails
  class SageComponentSchemaViolationError < StandardError
    def initialize(sage_component, attributes_attempted: {}, message: "")
      error_messages = [
        "#{sage_component.name} Schema Violation:\n#{message}",
        "#{sage_component.name} Schema:\n#{sage_component::ATTRIBUTE_SCHEMA.pretty_inspect}",
        "Attributes Passed:\n#{attributes_attempted.pretty_inspect}",
      ]

      super(error_messages.join("\n\n"))
    end
  end
end
