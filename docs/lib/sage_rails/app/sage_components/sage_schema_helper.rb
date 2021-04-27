module SageSchemaHelper
  ICON_SIZE = Set.new(["xs", "sm", "md", "lg", "xl", "2xl", "2xl", "3xl", "3xl", "4xl"])

  CONTAINER_SIZE = Set.new(["modal", "modal-lg", "xs", "sm", "md", "lg", "fluid"])

  GRID_TEMPLATE = Set.new([
    "m", "o", "ot", "om", "oo",
    "et", "em", "eo", "it", "im", "io", "se", "sm", "so",
    "te", "ti", "ts", "me", "mi", "ms", "oe", "oi", "os",
    "ete", "eti", "ets", "eme", "emi", "ems", "eoe", "eoi", "eos",
    "ite", "iti", "its", "ime", "imi", "ims", "ioe", "ioi", "ios",
    "ste", "sti", "sts", "sme", "smi", "sms", "soe", "soi", "sos",
  ])

  SAGE_ALIGN = {
    align_items: [:optional, Set.new([:"flex-start", :"flex-end", :center, :baseline, :stretch, "flex-start", "flex-end", "center", "baseline", "stretch"])],
    justify_content: [:optional, Set.new([:"flex-start", :"flex-end", :center, :"space-between", :"space-around", :"space-evenly", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"])],
  }

  SPACER = {
    top: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
    right: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
    bottom: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
    left: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
  }

  # Accepts any Collection that can be paginated
  def self.can_paginate?(value)
    value.respond_to?(:total_pages)
  end
end
