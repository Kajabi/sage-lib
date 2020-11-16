class SagePanelControls < SageComponent
  attr_accessor :bulk_action_items
  attr_accessor :item_count_label
  attr_accessor :show_bulk_actions
  attr_accessor :show_expand_collapse
  attr_accessor :show_pagination
  attr_accessor :show_sort
  attr_accessor :sort_items
  attr_accessor :start_expanded
  attr_accessor :target

  def sections
    %w(panel_controls_toolbar panel_controls_tabs)
  end
end
