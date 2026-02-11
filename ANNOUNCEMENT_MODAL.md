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
