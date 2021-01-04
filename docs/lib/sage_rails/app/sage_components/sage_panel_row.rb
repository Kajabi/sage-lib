class SagePanelRow < SageComponent
  set_attribute_schema({
    grid_template: Set.new([
      "m", "o", "mm", "mo",
      "et", "ete", "eti", "ets", "em", "eme", "emi", "ems", "eo", "eoe", "eoi", "eos",
      "it", "ite", "iti", "its", "im", "ime", "imi", "ims", "io", "ioe", "ioi", "ios",
      "st", "ste", "sti", "sts", "sm", "sme", "smi", "sms", "so", "soe", "soi", "sos",
    ]),
    vertical_align: [:optional, TrueClass],
  })
end
