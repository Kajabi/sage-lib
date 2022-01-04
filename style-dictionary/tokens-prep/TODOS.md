# Style dictionary progress

- [ ] SCSS
	- [ ] Custom props
		- [ ] Need to troubleshoot [Object] output
		- [ ] Need prefixes on all custom props
		- [ ] Disable custom props output for now
	- [ ] Tokens
		- [ ] need to test/patch alignment with existing token names
		- [x] can `-base` be ignored in var names like in function names?
		- [x] may need to remove functions from sass for now and just patch in sd values into existing ones
		- [ ] compare each output set for possible full replacements where there's 100% match
		- [ ] may need to trim down to just icon output for full implementation
- [ ] Components
	- [ ] More refinement needed here overall.
	- [ ] Disable component parsing for now and revise existing files to `test` context
- [ ] Other
	- [x] remove `packages/sage-assets/lib/stylesheets/dictionary/_variables.js`
	- [x] disable vanilla js output
  - [x] need to get other output of tokens finalized (rails, react, sass)
