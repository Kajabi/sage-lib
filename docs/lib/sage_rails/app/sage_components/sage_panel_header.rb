class SagePanelHeader < SageComponent
  set_attribute_schema({
    subtext: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
    title_tag: [:optional, NilClass, String],
  })

  def sections
    %w(panel_header_subtext)
  end
end
