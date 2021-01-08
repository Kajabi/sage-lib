class Sage<%= class_name %> < SageComponent
  # EXAMPLE ATTRIBUTES
  # set_attribute_schema({
  #   title: String,
  #   id: [:optional, String, Integer],
  #   items: [[{
  #     title: String,
  #     sub_title: String,
  #    }]],
  <%= initialize_attributes %>
  # })>
end
