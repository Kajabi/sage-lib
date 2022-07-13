// --- Webpacker Dependencies ---
import "core-js/stable";
import "regenerator-runtime/runtime";
import "../javascript/docs/index";
import "@kajabi/sage-system";

// --- Sage Docs Assets ----------
require.context("../images/docs", true);
import "../stylesheets/docs/index.scss";
