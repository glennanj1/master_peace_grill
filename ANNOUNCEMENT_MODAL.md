# Announcement Modal Configuration

The homepage announcement modal is controlled by environment variables.

## Default behavior

- `REACT_APP_SHOW_ANNOUNCEMENT_MODAL=false` keeps the modal disabled.
- The modal only renders when `REACT_APP_SHOW_ANNOUNCEMENT_MODAL=true`.
- If disabled, modal values do not render and cannot break the page.

## Environment variables

Use these keys in your `.env` file:

- `REACT_APP_SHOW_ANNOUNCEMENT_MODAL`
- `REACT_APP_ANNOUNCEMENT_MODAL_BADGE`
- `REACT_APP_ANNOUNCEMENT_MODAL_TITLE`
- `REACT_APP_ANNOUNCEMENT_MODAL_COPY`
- `REACT_APP_ANNOUNCEMENT_MODAL_PHONE`
- `REACT_APP_ANNOUNCEMENT_MODAL_SUBCOPY`
- `REACT_APP_ANNOUNCEMENT_MODAL_PRIMARY_LABEL`
- `REACT_APP_ANNOUNCEMENT_MODAL_PRIMARY_HREF`
- `REACT_APP_ANNOUNCEMENT_MODAL_SECONDARY_LABEL`
- `REACT_APP_ANNOUNCEMENT_MODAL_SECONDARY_HREF`
- `REACT_APP_ANNOUNCEMENT_MODAL_IMAGE_SRC`
- `REACT_APP_ANNOUNCEMENT_MODAL_IMAGE_ALT`

See `.env.example` for defaults.

## Copy-link button (`copyCta`)

`src/config/announcementModal.js` can add a "copy the link" button beside the
primary CTA so visitors can paste the link to friends or their socials:

```js
copyCta: {
  label: "Copy the Link",
  copiedLabel: "Link Copied! ✌️", // shown for 2.5s after a successful copy
  value: "https://example.com/",          // must be an http(s) URL
},
```

Omit `copyCta` (or set it to `null`) and no button renders. A non-http(s)
`value` is ignored the same way an invalid CTA href is.

## Closing the modal

Visitors can dismiss it four ways:

- the `X` button (44px, top right)
- clicking the dark backdrop outside the card
- pressing `Escape`
- the "Maybe later" text button at the bottom of the content, which stays
  reachable on mobile where the card scrolls and carries the `X` off the top

Override that last label with `dismissLabel: "No thanks"` in the config; it
falls back to "Maybe later".

## Safety and fallback behavior

- Missing text fields fall back to safe defaults.
- Missing/invalid links are sanitized and fall back safely.
- Missing image source hides the image block instead of crashing.
- The modal component returns `null` when disabled.

## Files involved

- `src/config/announcementModal.js`
- `src/markup/Pages/Index2.js`
- `src/markup/Element/Modal.js`
- `.env.example`
