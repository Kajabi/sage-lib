class SagePanelControls < SageComponent
  set_attribute_schema({
    bulk_action_items: [:optional, [[{
      attributes: [:optional, Hash],
      value: String,
    }]]],
    item_count_label: [:optional, String],
    # pagination: [:optional, SagePagination]
    items: [:optional, -> (v) { SageSchemaHelper.can_paginate?(v) }],
    pagination_additional_params: [:optional, Hash],
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
    %w(panel_controls_toolbar panel_controls_tabs)
  end

  # def page_count(collection)
    
  #   name = "Record"
  #   entry_name = name.titleize.pluralize(collection.total_count)

  #   if collection.total_pages < 2
  #     "<strong>#{collection.total_count}</strong> #{entry_name}"
  #   else
  #     first = collection.offset_value + 1
  #     last = collection.last_page? ? collection.total_count : collection.offset_value + collection.limit_value
  #     "<strong>#{first}</strong> - <strong>#{last}</strong> of <strong>#{collection.total_count}</strong> #{entry_name}"
  #   end.html_safe
  # end
end


{:show_bulk_actions=>true,
 :show_checkboxes=>true,
 :show_expand_collapse=>true,
 :show_pagination=>true,
 :show_sort=>true,
 :pagination_additional_params=>{},
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
