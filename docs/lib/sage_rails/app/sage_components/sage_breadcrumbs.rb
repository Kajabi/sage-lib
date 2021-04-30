class SageBreadcrumbs < SageComponent
  set_attribute_schema({
    has_back_icon: [:optional, TrueClass],
    is_progressbar: [:optional, TrueClass],
    items: [[{
      is_current: [:optional, TrueClass],
      text: String,
      url: [:optional, String],
    }]],
  })
end
