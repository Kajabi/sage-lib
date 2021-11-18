include SageTokens

ALIGNMENTS = ["left", "center", "right", "justify"]

module SageClassnamesHelper
  def sage_classnames(obj)
    classes = ""
    if obj.key?(:align)
      if ALIGNMENTS.include?(obj[:align])
        classes += "t-sage--align-#{obj[:align]} "
      else
        raise "align value is not valid"
      end
    end
    if obj.key?(:color)
      if COLOR_SLIDERS.include?(obj[:color])
        classes += "t-sage--color-#{obj[:color]} "
      else
        raise "color value is not valid"
      end
    end
    if obj.key?(:type_spec)
      if TYPE_SPECS.include?(obj[:type_spec])
        classes += "t-sage-#{obj[:type_spec]} "
      else
        raise "type_spec value is not valid"
      end
    end
    classes
  end
end
