class SagePanelControls < SageComponent
  set_attribute_schema({
    bulk_action_items: [:optional, [[NilClass, {
      attributes: [:optional, NilClass, Hash],
      value: String,
    }]]],
    item_count_label: [:optional, NilClass, String],
    items: [:optional, -> (v) { SageSchemas.can_paginate?(v) }],
    show_bulk_actions: [:optional, NilClass, TrueClass],
    show_checkboxes: [:optional, NilClass, TrueClass],
    show_expand_collapse: [:optional, NilClass, TrueClass],
    show_pagination: [:optional, NilClass, TrueClass],
    show_sort: [:optional, NilClass, TrueClass],
    sort_items: [:optional, [[NilClass, {
      attributes: [:optional, NilClass, Hash],
      value: String,
    }]]],
    start_expanded: [:optional, NilClass, TrueClass],
    target: [:optional, NilClass, String],
  })

  def sections
    %w(panel_controls_pagination panel_controls_toolbar panel_controls_tabs panel_controls_tabs_dropdown panel_controls_sort)
  end
end


{:show_bulk_actions=>true,
 :show_checkboxes=>true,
 :show_expand_collapse=>true,
 :show_pagination=>true,
 :show_sort=>true,
 :bulk_action_items=>
  [{:value=>"Delete",
    :attributes=>{:href=>"#", :"data-js-list-action"=>"delete_selected"}},
   {:value=>"Set marketing",
    :attributes=>
     {:href=>"#", :"data-js-list-action"=>"set_marketing_unsubscribed"}}],
 :sort_items=>
  [{:value=>"Name",
    :attributes=>{:href=>"#", :"data-js-list-sort-by"=>"name"}},
   {:value=>"Email",
    :attributes=>{:href=>"#", :"data-js-list-sort-by"=>"email"}},
   {:value=>"Join date",
    :attributes=>{:href=>"#", :"data-js-list-sort-by"=>"join_date"}}]}
