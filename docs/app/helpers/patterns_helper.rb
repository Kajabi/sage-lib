module PatternsHelper

  def sage_patterns
    [
      {
        title: "Common layouts",
        slug: "layouts",
        examples: [
          {
            title: "Flyer",
            partial: "flyer",
            description: "
              Many pages feature a single box of content.
            "
          },
          {
            title: "Summarized Flyer",
            partial: "summarized_flyer",
            description: "
              Often in our application a flyer is accompanied by a summary or description in an open sidebar.
            "
          },
          {
            title: "Side Fold",
            partial: "side_fold",
            description: "
              A formal main content area with an enclosed sidebar.
            "
          },
          {
            title: "Tiles",
            partial: "tiles",
            description: "
              Three columns of enclosed content wrapping into rows as needed.
            "
          },
        ]
      },
      {
        title: "Forms",
        slug: "forms",
        examples: [],
      },
      {
        title: "Actions",
        slug: "actions",
        examples: [],
      },
    ]
  end

  def sorted_sage_patterns
    sage_patterns.sort_by { |h| h[:title] }
  end

  def get_pattern(slug)
    sage_patterns.select { | pattern |  pattern[:slug] == slug }[0]
  end

  def render_pattern_example(example: example, slug: slug)
    if slug && example[:partial]
      render("patterns/example", example: example, slug: slug)
    else
      render("patterns/nil")
    end
  end
end
