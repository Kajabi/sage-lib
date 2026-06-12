window.Sage = window.Sage || {};
window.Sage.docs = window.Sage.docs || {}

// Re-export the namespace so consumer modules can `import { Sage } from './defineSage'`.
// This is what guarantees evaluation order: modules that assign onto the global at
// load time (e.g. `Sage.toast = (...)()`) must run AFTER this file has created
// `window.Sage`. Historically that ordering was only implied by the `require()` order
// in index.js, which worked under the old (Webpack/Rollup 3) CJS pipeline. Bundlers
// that hoist ES `import` statements above side-effect-only requires (Rollup 4 / Vite 6+)
// break the implicit order, evaluating a consumer before the namespace exists and
// throwing `ReferenceError: Sage is not defined`. Importing this binding creates an
// explicit dependency edge so the bundler is forced to evaluate defineSage first.
export const Sage = window.Sage;
