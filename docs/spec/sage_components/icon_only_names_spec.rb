require "rails_helper"

# pds-icon hides an icon that has no label of its own, so an icon-only control
# has to be named by the caller. When it is, the icon is hidden so the name
# isn't read twice; when it isn't, the icon is left alone.
RSpec.describe "Icon-only Sage components" do
  def render_component(klass, attributes)
    html = ApplicationController.render(
      inline: "<%= sage_component klass, attributes %>",
      locals: { klass: klass, attributes: attributes }
    )
    Nokogiri::HTML.fragment(html)
  end

  def icon(doc)
    doc.at_css("pds-icon")
  end

  describe SageLink do
    let(:base) { { url: "/settings", icon: { name: "pen", style: "left" } } }

    it "hides the icon when the link has a label" do
      doc = render_component(SageLink, base.merge(label: "Edit"))
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "hides the icon when an icon-only link is named by aria-label" do
      doc = render_component(SageLink, base.merge(html_attributes: { "aria-label": "Edit settings" }))
      expect(doc.at_css("a")["aria-label"]).to eq("Edit settings")
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "accepts link_to's nested aria hash" do
      doc = render_component(SageLink, base.merge(html_attributes: { aria: { label: "Edit settings" } }))
      expect(doc.at_css("a")["aria-label"]).to eq("Edit settings")
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "leaves the icon alone when an icon-only link has no name" do
      doc = render_component(SageLink, base)
      expect(icon(doc)["aria-hidden"]).to be_nil
    end

    it "hides a help link's icon when it is named by aria-label" do
      doc = render_component(SageLink, { url: "/help", help_link: true, html_attributes: { "aria-label": "Help with payouts" } })
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end
  end

  describe SageNavLink do
    let(:base) { { link: "/settings", icon: "gear" } }

    it "hides the icon when the nav link has text" do
      doc = render_component(SageNavLink, base.merge(text: "Settings"))
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "hides the icon when an icon-only nav link is named by aria-label" do
      doc = render_component(SageNavLink, base.merge(attributes: { "aria-label": "Settings" }))
      expect(doc.at_css("a")["aria-label"]).to eq("Settings")
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "leaves the icon alone when an icon-only nav link has no name" do
      doc = render_component(SageNavLink, base)
      expect(icon(doc)["aria-hidden"]).to be_nil
    end
  end

  describe SageTab do
    let(:base) { { text: "", icon: "pen" } }

    it "hides the icon when an icon-only tab is named through attributes" do
      doc = render_component(SageTab, base.merge(attributes: { "aria-label": "Edit" }))
      expect(doc.at_css("button")["aria-label"]).to eq("Edit")
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "hides the icon when an icon-only tab is named through html_attributes" do
      doc = render_component(SageTab, base.merge(html_attributes: { "aria-label": "Edit" }))
      expect(doc.at_css("button")["aria-label"]).to eq("Edit")
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "leaves the icon alone when an icon-only tab has no name" do
      doc = render_component(SageTab, base)
      expect(icon(doc)["aria-hidden"]).to be_nil
    end
  end

  describe SageChoice do
    it "hides the icon when an icon-only choice is named by aria-label" do
      doc = render_component(SageChoice, { type: "icon", icon: "pen", attributes: { "aria-label": "Edit" } })
      expect(doc.at_css("button")["aria-label"]).to eq("Edit")
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "hides the arrow when an arrow choice is named by aria-labelledby" do
      doc = render_component(SageChoice, { type: "arrow", html_attributes: { "aria-labelledby": "next-step" } })
      expect(doc.at_css("button")["aria-labelledby"]).to eq("next-step")
      expect(icon(doc)["aria-hidden"]).to eq("true")
    end

    it "leaves the icon alone when an icon-only choice has no name" do
      doc = render_component(SageChoice, { type: "icon", icon: "pen" })
      expect(icon(doc)["aria-hidden"]).to be_nil
    end
  end
end
