import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { TransactionCard } from "./transactionCard";

storiesOf("Sage/TransactionCard", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => (
      <TransactionCard
        name={text("Name", "Lilly Jones")}
        amount={text("Amount", "+ $148.00")}
        amountColor={select("Amount Color", TransactionCard.AMOUNT_COLORS)}
      ></TransactionCard>
    ),
    {}
  );
