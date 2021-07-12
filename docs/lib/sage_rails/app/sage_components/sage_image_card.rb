class SageImageCard < SageComponent
  set_attribute_schema({
    image: [:optional, String],
    alt_text: [:optional, String],
    title: String,
    link: [{
      href: String,
      value: String,
    }],
  })
end
