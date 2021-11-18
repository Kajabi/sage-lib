include SageTokens

ALIGNMENTS = ["left", "center", "right", "justify"]

SPACERS = [
  "top", "right", "bottom", "left",
  "top-3xs", "right-3xs", "bottom-3xs", "left-3xs",
  "top-2xs", "right-2xs", "bottom-2xs", "left-2xs",
  "top-xs", "right-xs", "bottom-xs", "left-xs",
  "top-sm", "right-sm", "bottom-sm", "left-sm",
  "top-md", "right-md", "bottom-md", "left-md",
  "top-lg", "right-lg", "bottom-lg", "left-lg",
  "top-xl", "right-xl", "bottom-xl", "left-xl",
  "top-2xl", "right-2xl", "bottom-2xl", "left-2xl",
]

TEXT_MODIFIERS = ["truncate", "strikethrough"]

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
        key_name: :spacer,
        arr: SPACERS,
        class_prefix: "sage-spacer-",
      },
      {
        key_name: :text_modifier,
        arr: TEXT_MODIFIERS,
        class_prefix: "t-sage--",
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
