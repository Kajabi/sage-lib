class SageFormSection < SageComponent
  set_attribute_schema({
    id: [:optional, NilClass, String],
    subtitle: [:optional, NilClass, String],
    title_tag: [:optional, NilClass, String],
    title: [:optional, NilClass, String],
  })

  def sections
    %w(form_section_subtitle)
  end
end
