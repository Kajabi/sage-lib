class SagePanelControls < SageComponent
  set_attribute_schema({
    bulk_action_items: [:optional, [[{
      attributes: [:optional, Hash],
      value: String,
    }]]],
    item_count_label: [:optional, String],
    items: [:optional, -> (v) { SageSchemaHelper.can_paginate?(v) }],
    show_bulk_actions: [:optional, TrueClass],
    show_checkboxes: [:optional, TrueClass],
    show_expand_collapse: [:optional, TrueClass],
    show_pagination: [:optional, TrueClass],
    show_sort: [:optional, TrueClass],
    sort_items: [:optional, [[{
      attributes: [:optional, Hash],
      value: String,
    }]]],
    start_expanded: [:optional, TrueClass],
    target: [:optional, String],
  })

  def sections
    %w(panel_controls_pagination panel_controls_toolbar panel_controls_tabs panel_controls_tabs_dropdown )
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
