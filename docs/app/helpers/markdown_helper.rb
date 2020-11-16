module MarkdownHelper
  require "redcarpet"
  require "rouge"
  require "rouge/plugins/redcarpet"

  class HTML < Redcarpet::Render::HTML
    include Rouge::Plugins::Redcarpet
  end

  def md(text, use_sage_type: false)
    render_options = {
      # filer_html: true, 
      # hard_wrap: true,#
      link_attributes: { rel: 'nofollow' },
      with_toc_data: true,
      tables: true
    }
    renderer = HTML.new(render_options)
    extras = {
      no_intra_emphasis: true,
      disable_indented_code_blocks: true,
      fenced_code_blocks: true,
      with_toc_data: true,
      tables: true,
      # autolink: true,
      # strikethrough: true,
      # superscript: true,
      # lax_spacing: true,
    }
 
    markdown = Redcarpet::Markdown.new(renderer, extras)
    if use_sage_type
      "<div class=\"sage-type\">#{markdown.render(text)}</div>".html_safe
    else
      raw markdown.render(text)
    end
  end
 
 end
