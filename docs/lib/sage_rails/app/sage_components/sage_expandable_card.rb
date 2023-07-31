class SageExpandableCard < SageComponent
  set_attribute_schema({
    align_arrow_right: [:optional, NilClass, TrueClass],
    align_trigger: [:optional, NilClass, String],
    body_bordered: [:optional, NilClass, TrueClass],
    expanded: [:optional, NilClass, TrueClass],
    sage_type: [:optional, NilClass, TrueClass],
    trigger_label: [:optional, NilClass, String],
  })

  def sections
    %w(expandable_card_custom_header )
  end
end

