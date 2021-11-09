module Mocks::ContactProfileHelper

  def contact_profile_data
    {
      avatar_image: "avatar/court.png",
      email: "court@kajabi.com",
      initials: "CM",
      name: "Court McFadzean",
      user_stats: [
        [
          {
            title: "Lifetime value",
            data: "$230",
          },
          {
            title: "Total offers",
            data: "3",
            link: "#offers"
          },
          {
            title: "Total products",
            data: "6",
            link: "#products"
          },
        ],
        [
          {
            title: "Last sign-in",
            data: "Aug. 12, 2021",
          },
          {
            title: "Total sign-in",
            data: "32",
          },
        ],
        [
          {
            title: "Contact status",
            data: sage_component(SageLabel, {
              value: "Member",
              color: "info",
              icon: "check-circle-filled"
            }),
          },
          {
            title: "Marketing status",
            data: "Subscribed",
          },
          {
            title: "Contact added",
            data: "Jan. 23, 2021",
          },
          {
            title: "Opt-in status",
            data: "Unconfirmed",
          },
          {
            title: "Affiliate referral",
            data: "Abe Lincoln",
          },
        ]
      ],
      tags: ["2021", "Hello", "Summer", "Holiday", "Welcome", "Tag", "Tuesday"]
    }
  end
  
  # configs for profile buttons
  def contact_profile_button_bar_items
    [
      {
        href: "#edit-contact",
        icon: "pen",
        label: "Edit contact",
      },
      {
        href: "#reset-password",
        icon: "reset-password",
        label: "Reset password",
      },
      {
        href: "#add-tag",
        icon: "tag",
        label: "Add tag",
      },
      {
        href: "#grant-offer",
        icon: "grant-offer",
        label: "Grant offer",
      },
    ]
  end
  
  # configs for more options dropdown
  def contact_profile_more_options_items
    [
      {
        value: "Change password",
        attributes: { href: "#change-password" },
      },
      {
        value: "Add a note",
        attributes: { href: "#add-a-note" },
      },
      {
        value: "Mute",
        attributes: { href: "#mute" },
      },
      {
        value: "Hide",
        attributes: { href: "#hide" },
      },
      {
        value: "Delete",
        attributes: { href: "#delete" },
        style: "danger",
        modifiers: ["border-before"],
      }
    ]
  end
end
