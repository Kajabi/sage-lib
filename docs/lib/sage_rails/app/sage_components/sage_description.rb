class SageDescription < SageComponent
  # TODO: simplify to items only (remove data, link, title from root)
  # once instances are converted to the lists format.
  set_attribute_schema({
    data: [:optional, NilClass, String, Integer, Hash],
    id: [:optional, String],
    inline_spread: [:optional, TrueClass],
    link: [:optional, String],
    title: [:optional, String],
    allcaps_titles: [:optional, TrueClass],
    items: [:optional, [[{
      data: [:optional, NilClass, String, Integer, Hash],
      link: [:optional, String],
      title: [:optional, String],
    }]]]
  })
end
