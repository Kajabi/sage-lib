include SageTokens

ALIGNMENTS = ["left", "center", "right", "justify"]

module SageClassnamesHelper

  def tokens
    [
      {
        key_name: :align,
        arr: ALIGNMENTS,
        class_prefix: "t-sage--align-",
      },
      {
        key_name: :color,
        arr: COLOR_SLIDERS,
        class_prefix: "t-sage--color-",
      },
      {
        key_name: :type_spec,
        arr: TYPE_SPECS,
        class_prefix: "t-sage-",
      }
    ]
  end

  def sage_classnames(obj)
    classes = ""
    tokens.each_with_index do |token, index|
      kn = token[:key_name]
      if obj.key?(kn)
        if token[:arr].include?(obj[kn])
          classes += token[:class_prefix].to_s + obj[kn] + " "
        else
          raise "#{kn.to_s} value is not valid"
        end
      end
    end
    classes
  end
end
