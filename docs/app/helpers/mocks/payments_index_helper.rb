module Mocks::PaymentsIndexHelper
  def payments_index_cards(with_data: false, payments_adopted: false)

    if (with_data)
      all_payments = {
        value: 144,
        change: {
          value: 8,
          type: "positive",
        },
      }
      subscriptions =  {
        value: 96,
        change: {
          value: 24,
          type: "positive",
        },
      }
      multiple_payments = {
        value: 24,
        change: {
          value: 16,
          type: "negative",
        },
      }
    else
      all_payments = {
        value: 0,
        change: nil,
      }
      subscriptions = {
        value: 0,
        change: nil,
      }
      multiple_payments = {
        value: 0,
        change: nil,
      }
    end

    payment_cards = [
      {
        change: all_payments[:change],
        more_label: "View all",
        more_url: "#TODO-view-all-successful-payments-url",
        name: "All payments",
        subtext: "successful payments",
        value: all_payments[:value],
      },
      {
        change: subscriptions[:change],
        more_label: "View all",
        more_url: "#TODO-view-all-new-subscriptions-url",
        name: "Subscriptions",
        subtext: "new subscriptions",
        value: subscriptions[:value],
      },
      {
        change: multiple_payments[:change],
        more_label: "View all",
        more_url: "#TODO-view-all-new-multiple-payments-url",
        name: "Multiple payments",
        subtext: "new multiple payments",
        value: multiple_payments[:value],
      },
    ]

    if (payments_adopted)
      payment_cards.push({
        change: {
          type: "negative",
          value: "1 new",
        },
        more_label: "View details",
        more_url: "#TODO-view-details-disputes-url",
        name: "Disputes",
        subtext: "active disputes",
        value: 2,
      })
      payment_cards.push({
        more_label: "View details",
        more_url: "#TODO-view-details-payouts-url",
        name: "Payout",
        subtext: "arriving Nov 29, 2021",
        value: "$2,048",
      })
    end

    payment_cards
  end
end
