module Mocks::CreationWizardHelper

  def creation_product_types
    {
      product_types: [
        {
          target: "tab1",
          active: true,
          content: %(
            #{sage_component(SageCardRow, { grid_template: "et", content: %(
              #{image_tag("courses-icon.png", alt: "", size: "56", class: "creation-product-img")}
              <h3 class="#{SageClassnames::TYPE::HEADING_5}">Course</h3>
            ).html_safe})
          }).html_safe
        },
        {
          target: "tab2",
          content: %(
            #{sage_component(SageCardRow, { grid_template: "et", content: %(
              #{image_tag("podcasts-icon.png", alt: "", size: "56", class: "creation-product-img")}
              <h3 class="#{SageClassnames::TYPE::HEADING_5}">Podcast</h3>
            ).html_safe})
          }).html_safe
        },
        {
          target: "tab3",
          content: %(
            #{sage_component(SageCardRow, { grid_template: "et", content: %(
              #{image_tag("community-icon.png", alt: "", size: "56", class: "creation-product-img")}
              <h3 class="#{SageClassnames::TYPE::HEADING_5}">Community</h3>
            ).html_safe})
          }).html_safe
        },
        {
          target: "tab4",
          content: %(
            #{sage_component(SageCardRow, { grid_template: "et", content: %(
              #{image_tag("coaching-icon.png", alt: "", size: "56", class: "creation-product-img")}
              <h3 class="#{SageClassnames::TYPE::HEADING_5}">Coaching</h3>
            ).html_safe})
          }).html_safe
        },
      ],
    }
  end


  def creation_product_details
  {
    product_details: [
      {
        id: "tab1",
        name: "Course",
        desc: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat ullam minima voluptatibus numquam corporis totam.</p>".html_safe,
        avail_features: [
          {
            icon: "assessment",
            value: "Quizzes and surveys"\
          },
          {
            icon: "download",
            value: "Downloads"
          },
          {
            icon: "file",
            value: "Text posts"
          },
          {
            icon: "microphone",
            value: "Audio content"
          },
          {
            icon: "user-circle",
            value: "Memberships"
          },
          {
            icon: "video-on",
            value: "Video content"
          } ,
        ]
      },
      {
        id: "tab2",
        name: "Podcast",
        desc: "<p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Quasi placeat ullam minima voluptatibus.</p>".html_safe,
        avail_features: [
          {
            icon: "download",
            value: "Downloads"
          },
          {
            icon: "file",
            value: "Text posts"
          },{
            icon: "assessment",
            value: "Quizzes and surveys"\
          },
          {
            icon: "microphone",
            value: "Audio content"
          },
          {
            icon: "user-circle",
            value: "Memberships"
          },
          {
            icon: "video-on",
            value: "Video content"
          },
        ]
      },
      {
        id: "tab3",
        name: "Community",
        desc: "<p>Innace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper.</p>".html_safe,
        avail_features: [
          {
            icon: "assessment",
            value: "Quizzes and surveys"\
          },
          {
            icon: "microphone",
            value: "Audio content"
          },
          {
            icon: "user-circle",
            value: "Memberships"
          },
          {
            icon: "download",
            value: "Downloads"
          },
          {
            icon: "file",
            value: "Text posts"
          },
          {
            icon: "video-on",
            value: "Video content"
          },
        ]
      },
      {
        id: "tab4",
        name: "Coaching",
        desc: "<p>Limey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.</p>".html_safe,
        avail_features: [
          {
            icon: "file",
            value: "Text posts"
          },
          {
            icon: "microphone",
            value: "Audio content"
          },
          {
            icon: "user-circle",
            value: "Memberships"
          },
          {
            icon: "video-on",
            value: "Video content"
          },
          {
            icon: "assessment",
            value: "Quizzes and surveys"\
          },
          {
            icon: "download",
            value: "Downloads"
          },
        ]
      },
    ]
  }
  end

end
