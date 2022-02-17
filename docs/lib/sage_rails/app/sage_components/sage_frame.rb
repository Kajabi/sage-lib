class SageFrame < SageComponent
  set_attribute_schema({
    align: [:optional, NilClass, Set.new(SageTokens::FRAME_ALIGNMENTS)],
    background: [:optional, NilClass, Set.new(SageTokens::COLOR_SLIDERS), String],
    border: [:optional, NilClass, Set.new(SageTokens::FRAME_BORDERS)],
    border_radius: [:optional, NilClass, Set.new(SageTokens::FRAME_BORDER_RADII)],
    direction: [:optional, NilClass, Set.new(SageTokens::FRAME_DIRECTIONS)],
    gap: [:optional, NilClass, Set.new(SageTokens::FRAME_SPACINGS)],
    padding: [:optional, NilClass, Set.new(SageTokens::FRAME_SPACINGS)],
    preset: [:optional, NilClass, Set.new(SageTokens::FRAME_PRESETS)],
    tag: [:optional, NilClass, String],
    width: [:optional, NilClass, String, Set.new(SageTokens::FRAME_WIDTHS)]
  })
end
