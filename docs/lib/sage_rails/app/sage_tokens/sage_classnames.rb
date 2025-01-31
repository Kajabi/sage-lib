module SageClassnames

  #
  # Style dictionary utilities
  #

  #
  # Constants
  #

  GRID_CARD = "sage-card-grid"
  GRID_PANEL = "sage-panel-grid"

  module GRID_GAP_OPTIONS
    XS   = "sage-grid-gap-xs"
    SM   = "sage-grid-gap-sm"
    MD   = "sage-grid-gap-md"
    LG   = "sage-grid-gap-lg"
  end

  module GRID_TEMPLATES
    SageDictionary::SD_SAGE_CONTENT_GRID_TEMPLATE.map do |k, v|
      const_set("#{k}", v[:CLASSNAME])
    end
  end

  module LINK
    LAUNCH = "sage-link--launch"
    SUBTEXT = "sage-link--subtext"
  end

  module SPACERS
    XXXS_TOP = "sage-spacer-top-3xs"
    XXXS_RIGHT = "sage-spacer-right-3xs"
    XXXS_BOTTOM = "sage-spacer-bottom-3xs"
    XXXS_LEFT = "sage-spacer-left-3xs"
    XXS_TOP = "sage-spacer-top-2xs"
    XXS_RIGHT = "sage-spacer-right-2xs"
    XXS_BOTTOM = "sage-spacer-bottom-2xs"
    XXS_LEFT = "sage-spacer-left-2xs"
    XS_TOP = "sage-spacer-top-xs"
    XS_RIGHT = "sage-spacer-right-xs"
    XS_BOTTOM = "sage-spacer-bottom-xs"
    XS_LEFT = "sage-spacer-left-xs"
    SM_TOP = "sage-spacer-top-sm"
    SM_RIGHT = "sage-spacer-right-sm"
    SM_BOTTOM = "sage-spacer-bottom-sm"
    SM_LEFT = "sage-spacer-left-sm"
    MD_TOP = "sage-spacer-top"
    MD_RIGHT = "sage-spacer-right"
    MD_BOTTOM = "sage-spacer-bottom"
    MD_LEFT = "sage-spacer-left"
    LG_TOP = "sage-spacer-top-lg"
    LG_RIGHT = "sage-spacer-right-lg"
    LG_BOTTOM = "sage-spacer-bottom-lg"
    LG_LEFT = "sage-spacer-left-lg"
    XL_TOP = "sage-spacer-top-xl"
    XL_RIGHT = "sage-spacer-right-xl"
    XL_BOTTOM = "sage-spacer-bottom-xl"
    XL_LEFT = "sage-spacer-left-xl"
    XXL_TOP = "sage-spacer-top-2xl"
    XXL_RIGHT = "sage-spacer-right-2xl"
    XXL_BOTTOM = "sage-spacer-bottom-2xl"
    XXL_LEFT = "sage-spacer-left-2xl"
  end

  TRUNCATE_TEXT = "t-sage--truncate"

  REVEAL_CONTAINER = "sage-reveal-container"
  REVEAL_ON_HOVER = "sage-reveal-on-hover"
  REVEAL_ON_CONTAINER_HOVER = "sage-reveal-on-container-hover"

  module TYPE
    HEADING_1 = "t-sage-heading-1"
    HEADING_2 = "t-sage-heading-2"
    HEADING_3 = "t-sage-heading-3"
    HEADING_4 = "t-sage-heading-4"
    HEADING_5 = "t-sage-heading-5"
    HEADING_6 = "t-sage-heading-6"
    BODY = "t-sage-body"
    BODY_BOLD = "t-sage-body-bold"
    BODY_MED = "t-sage-body-med"
    BODY_SEMI = "t-sage-body-semi"
    BODY_SMALL = "t-sage-body-small"
    BODY_SMALL_BOLD = "t-sage-body-small-bold"
    BODY_SMALL_MED = "t-sage-body-small-med"
    BODY_SMALL_SEMI = "t-sage-body-small-semi"
    BODY_XSMALL = "t-sage-body-xsmall"
    BODY_XSMALL_BOLD = "t-sage-body-xsmall-bold"
    BODY_XSMALL_MED = "t-sage-body-xsmall-med"
    BODY_XSMALL_SEMI = "t-sage-body-xsmall-semi"
  end

  TYPE_ALIGN_CENTER = "t-sage--align-center"
  TYPE_ALIGN_RIGHT = "t-sage--align-right"
  TYPE_BLOCK = "sage-type"

  module TYPE_COLORS
    SageDictionary::SD_SAGE_COLOR.each do |color, hash|
      hash.each do |index, values|
        if index.to_s == "300"
          const_set(color, values[:CLASSNAME])
        end

        const_set("#{color}_#{index}", values[:CLASSNAME])
      end
    end
  end

  TYPE_STRIKETHROUGH = "t-sage--strikethrough"
  TYPE_UNDERLINE_DOTTED = "t-sage--underline-dotted"
end
