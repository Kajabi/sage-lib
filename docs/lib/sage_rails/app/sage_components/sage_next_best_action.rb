class SageNextBestAction < SageComponent
  set_attribute_schema({
    color: [:optional, SageSchemas::STATUSES],
    desc: [:optional, String],
    title: [:optional, String],
  })
end
