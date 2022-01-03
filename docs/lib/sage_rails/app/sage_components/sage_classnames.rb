module SageClassnames

  #
  # Style dictionary utilities
  #

  #
  # Constants
  #

  GRID_CARD = "sage-card-grid"
  GRID_PANEL = "sage-panel-grid"

  module GRID_TEMPLATES
    M   = "sage-grid-template-m"   # --
    O   = "sage-grid-template-o"   # ---
    OT  = "sage-grid-template-ot"  # ----
    OM  = "sage-grid-template-om"  # -----
    OO  = "sage-grid-template-oo"  # ------
    ET  = "sage-grid-template-et"  # .-
    EM  = "sage-grid-template-em"  # .--
    EO  = "sage-grid-template-eo"  # .---
    IT  = "sage-grid-template-it"  # ..-
    IM  = "sage-grid-template-im"  # ..--
    IO  = "sage-grid-template-io"  # ..---
    SE  = "sage-grid-template-se"  # ...-
    SM  = "sage-grid-template-sm"  # ...--
    SO  = "sage-grid-template-so"  # ...---
    TE  = "sage-grid-template-te"  # -.
    TI  = "sage-grid-template-ti"  # -..
    TS  = "sage-grid-template-ts"  # -...
    ME  = "sage-grid-template-me"  # --.
    MI  = "sage-grid-template-mi"  # --..
    MS  = "sage-grid-template-ms"  # --...
    OE  = "sage-grid-template-oe"  # ---.
    OI  = "sage-grid-template-oi"  # ---..
    OS  = "sage-grid-template-os"  # ---...
    ETE = "sage-grid-template-ete" # .-.
    ETI = "sage-grid-template-eti" # .-..
    ETS = "sage-grid-template-ets" # .-...
    EME = "sage-grid-template-eme" # .--.
    EMI = "sage-grid-template-emi" # .--..
    EMS = "sage-grid-template-ems" # .--...
    EOE = "sage-grid-template-eoe" # .---.
    EOI = "sage-grid-template-eoi" # .---..
    EOS = "sage-grid-template-eos" # .---...
    ITE = "sage-grid-template-ite" # ..-.
    ITI = "sage-grid-template-iti" # ..-..
    ITS = "sage-grid-template-its" # ..-...
    IME = "sage-grid-template-ime" # ..--.
    IMI = "sage-grid-template-imi" # ..--..
    IMS = "sage-grid-template-ims" # ..--...
    IOE = "sage-grid-template-ioe" # ..---.
    IOI = "sage-grid-template-ioi" # ..---..
    IOS = "sage-grid-template-ios" # ..---...
    STE = "sage-grid-template-ste" # ...-.
    STI = "sage-grid-template-sti" # ...-..
    STS = "sage-grid-template-sts" # ...-...
    SME = "sage-grid-template-sme" # ...--.
    SMI = "sage-grid-template-smi" # ...--..
    SMS = "sage-grid-template-sms" # ...--...
    SOE = "sage-grid-template-soe" # ...---.
    SOI = "sage-grid-template-soi" # ...---..
    SOS = "sage-grid-template-sos" # ...---...
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
end
