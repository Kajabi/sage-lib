The Modal allows us to format a modal window according to Sage design specs and includes the following features:

-- `active` -- Whether or not the Modal is active/visible. This way the containing component can control its state.
-- `onExit` -- A callback to handle closing the Modal. This is currently only fired when the user clicks on the background blur but will later also consolidate relevant accessibility controls.
-- `Modal.Headeer` -- Formats the header of the modal. Can also include a `Modal.Header.Aside` for an optional element in the upper-right of the modal.
-- `Modal.Body` -- Minimal requirement to properly format the contents of the Modal.
-- `Modal.Footer` -- Formats the footer of the modal. Can also include a `Modal.Footer.Aside` for an optional element in the lower-left of the modal.
