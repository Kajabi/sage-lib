module TypeSpecsHelper
  #
  # TODO: Consolidate type spec info to avoid repetition here
  #
  def sage_type_specs
    [
      {
        style: md(%(
          <span class="t-sage-heading-1">Heading 1</span><br/>
          HTML: `t-sage-heading-1`<br/>
          Rails: `SageClassnames::TYPE::HEADING_1`<br/>
          React: `SageClassnames.TYPE.HEADING_1`
        )),
        weight: "700",
        kerning: "-0.6px",
        desktop: "40px / 48px",
        mobile: "40px / 48px",
      },
      {
        style: md(%(
          <span class="t-sage-heading-2">Heading 2</span><br/>
          HTML: `t-sage-heading-2`<br/>
          Rails: `SageClassnames::TYPE::HEADING_2`<br/>
          React: `SageClassnames.TYPE.HEADING_2`
        )),
        weight: "700",
        kerning: "-0.5px",
        desktop: "32px / 40px",
        mobile: "32px / 40px",
      },
      {
        style: md(%(
          <span class="t-sage-heading-3">Heading 3</span><br/>
          HTML: `t-sage-heading-3`<br/>
          Rails: `SageClassnames::TYPE::HEADING_3`<br/>
          React: `SageClassnames.TYPE.HEADING_3`
        )),
        weight: "700",
        kerning: "-0.15px",
        desktop: "28px / 32px",
        mobile: "28px / 32px",
      },
      {
        style: md(%(
          <span class="t-sage-heading-4">Heading 4</span><br/>
          HTML: `t-sage-heading-4`<br/>
          Rails: `SageClassnames::TYPE::HEADING_4`<br/>
          React: `SageClassnames.TYPE.HEADING_4`
        )),
        weight: "600",
        kerning: "-0.15px",
        desktop: "24px / 32px",
        mobile: "24px / 32px",
      },
      {
        style: md(%(
          <span class="t-sage-heading-5">Heading 5</span><br/>
          HTML: `t-sage-heading-5`<br/>
          Rails: `SageClassnames::TYPE::HEADING_5`<br/>
          React: `SageClassnames.TYPE.HEADING_5`
        )),
        weight: "600",
        kerning: "0px",
        desktop: "18px / 28px",
        mobile: "18px / 28px",
      },
      {
        style: md(%(
          <span class="t-sage-heading-6">Heading 6</span><br/>
          HTML: `t-sage-heading-6`<br/>
          Rails: `SageClassnames::TYPE::HEADING_6`<br/>
          React: `SageClassnames.TYPE.HEADING_6`
        )),
        weight: "600",
        kerning: "0px",
        desktop: "16px / 28px",
        mobile: "16px / 28px",
      },
      {
        style: md(%(
          <span class="t-sage-body">Body*</span><br/>
          HTML: `t-sage-body`<br/>
          Rails: `SageClassnames::TYPE::BODY`<br/>
          React: `SageClassnames.TYPE.BODY`
        )),
        weight: "400*",
        kerning: "0px",
        desktop: "16px / 24px",
        mobile: "16px / 24px",
      },
      {
        style: md(%(
          <span class="t-sage-body-small">Small Body*</span><br/>
          HTML: `t-sage-body-small`<br/>
          Rails: `SageClassnames::TYPE::BODY_SMALL`<br/>
          React: `SageClassnames.TYPE.BODY_SMALL`
        )),
        weight: "400*",
        kerning: "0px",
        desktop: "14px / 20px",
        mobile: "14px / 20px",
      },
      {
        style: md(%(
          <span class="t-sage-body-xsmall">Extra Small Body*</span><br/>
          HTML: `t-sage-body-xsmall`<br/>
          Rails: `SageClassnames::TYPE::BODY_XSMALL`<br/>
          React: `SageClassnames.TYPE.BODY_XSMALL`
        )),
        weight: "400*",
        kerning: "0px",
        desktop: "12px / 16px",
        mobile: "12px / 16px",
      }
    ]
  end

  def sage_type_specs_color_classes
    [
      {
        color: %(<span class="t-sage-body-semi t-sage--color-primary-300">Primary</span>),
        type_class: md("`t-sage--color-primary-300`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_COLORS::PRIMARY_300`<br/>
          React: `SageClassnames.TYPE_COLORS.PRIMARY_300`
        )),
      },
      {
        color: %(<span class="t-sage-body-semi t-sage--color-grey-600">Grey</span>),
        type_class: md("`t-sage--color-grey-600`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_COLORS::GREY_600`<br/>
          React: `SageClassnames.TYPE_COLORS.GREY_600`
        )),
      },
      {
        color: %(<span class="t-sage-body-semi t-sage--color-red-600">Red</span>),
        type_class: md("`t-sage--color-red-600`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_COLORS::RED_600`<br/>
          React: `SageClassnames.TYPE_COLORS.RED_600`
        )),
      },
      {
        color: %(<span class="t-sage-body-semi t-sage--color-mercury-500">Orange</span>),
        type_class: md("`t-sage--color-mercury-500`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_COLORS::MERCURY_500`<br/>
          React: `SageClassnames.TYPE_COLORS.MERCURY_500`
        )),
      },
      {
        color: %(<span class="t-sage-body-semi t-sage--color-yellow-400">Yellow</span>),
        type_class: md("`t-sage--color-yellow-400`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_COLORS::YELLOW_400`<br/>
          React: `SageClassnames.TYPE_COLORS.YELLOW_400`
        )),
      },
      {
        color: %(<span class="t-sage-body-semi t-sage--color-green-600">Sage</span>),
        type_class: md("`t-sage--color-green-600`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_COLORS::GREEN_600`<br/>
          React: `SageClassnames.TYPE_COLORS.GREEN_600`
        )),
      },
      {
        color: %(<span class="t-sage-body-semi t-sage--color-purple-600">Purple</span>),
        type_class: md("`t-sage--color-purple-600`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_COLORS::PURPLE_600`<br/>
          React: `SageClassnames.TYPE_COLORS.PURPLE_600`
        )),
      }
    ]
  end

  def sage_type_specs_other_features
    [
      {
        description: md("Truncate text with an ellipsis when available space runs out"),
        class: md("`t-sage--truncate`"),
        constants: md(%(
          Rails: `SageClassnames::TRUNCATE_TEXT`<br />
          React: `SageClassnames.TRUNCATE_TEXT`
        ))
      },
      {
        description: md("Adjust alignment of type to right"),
        class: md("`t-sage--align-right`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_ALIGN_RIGHT`<br />
          React: `SageClassnames.TYPE_ALIGN_RIGHT`
        ))
      },
      {
        description: md("Adjust alignment of type to hang center"),
        class: md("`t-sage--align-center`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_ALIGN_CENTER`<br />
          React: `SageClassnames.TYPE_ALIGN_CENTER`
        ))
      },
      {
        description: md("Apply a strikethrough to text"),
        class: md("`t-sage--strikethrough`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_STRIKETHROUGH`<br />
          React: `SageClassnames.TYPE_STRIKETHROUGH`
        ))
      },
      {
        description: md("Apply dotted underline to text"),
        class: md("`t-sage--underline-dotted`"),
        constants: md(%(
          Rails: `SageClassnames::TYPE_UNDERLINE_DOTTED`<br />
          React: `SageClassnames.TYPE_UNDERLINE_DOTTED`
        ))
      }
    ]
  end
end
