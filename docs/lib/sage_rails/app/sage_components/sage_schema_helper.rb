module SageSchemaHelper
  ICON_SIZE = Set.new(["xs", "sm", "md", "lg", "xl", "2xl", "2xl", "3xl", "3xl", "4xl"])

  CONTAINER_SIZE = Set.new(["modal", "modal-lg", "xs", "sm", "md", "lg", "fluid"])

  GRID_TEMPLATE = Set.new([
    "m", "o", "mm", "mo", "te",
    "et", "ete", "eti", "ets", "em", "eme", "emi", "ems", "eo", "eoe", "eoi", "eos",
    "it", "ite", "iti", "its", "im", "ime", "imi", "ims", "io", "ioe", "ioi", "ios",
    "st", "ste", "sti", "sts", "sm", "sme", "smi", "sms", "so", "soe", "soi", "sos",
  ])

  SPACER = {
    top: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
    right: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
    bottom: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
    left: [:optional, Set.new([:xs, :sm, :md, :lg, :xl, "xs", "sm", "md", "lg", "xl"])],
  }

  # Accepts ActiveRecord descendants
  def self.is_active_record?(value)
    value.superclass == ActiveRecord::Base
  end
end
