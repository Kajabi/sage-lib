class SageMediaTile < SageComponent
  set_attribute_schema(SageSchemas::MEDIA_TILE)

  def sections
    %w(media_tile_media media_tile_actions media_tile_body media_tile_caption media_tile_footer)
  end
end
