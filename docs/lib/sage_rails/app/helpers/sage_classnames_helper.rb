TYPE_SPECS = [
  "heading-1", "heading-2", "heading-3", "heading-4", "heading-5", "heading-6",
  "nav", "nav-sub",
  "body", "body-med", "body-semi", "body-bold",
  "body-small", "body-small-med", "body-small-semi", "body-small-bold",
  "body-xsmall", "body-xsmall-med", "body-xsmall-semi", "body-xsmall-bold",
]

module SageClassnamesHelper
  def sage_classnames(obj)
    classes = ""
    if obj.key?(:align)
      classes += "t-sage--align-#{obj[:align]} "
    end
    if obj.key?(:color)
      classes += "t-sage--color-#{obj[:color]} "
    end
    if obj.key?(:type_spec)
      if TYPE_SPECS.include?(obj[:type_spec])
        classes += "t-sage-#{obj[:type_spec]} "
      else
        raise "type_spec is not valid"
      end
    end
    classes
  end
end
