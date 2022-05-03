export default class SageDocsTab {
  constructor (el) {
    this.PERMALINK_ATTRIBUTE = 'jsTabsPermalink';
    this.TABS_CHANGE_EVENT_NAME = 'sage.tabs.change';
    this.TABS_INITIAL_EVENT_NAME = 'sage.tabs.initial';

    this.tabs = el;
    this.permalinkEnabled = false;
  }

  init() {
    this.permalinkEnabled = Boolean(this.tabs.dataset[this.PERMALINK_ATTRIBUTE])
    if (this.permalinkEnabled) this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('popstate', event => {
      let tabsId, paneId;
      const detail = { tabsId, paneId } = event.state;
      document.dispatchEvent(new CustomEvent(this.TABS_CHANGE_EVENT_NAME, { detail }));
    });

    this.tabs.addEventListener(this.TABS_INITIAL_EVENT_NAME, e => {
      if (this.permalinkEnabled == true) {
        this.updateHistory(e.type, e.detail);
      }
    });

    this.tabs.addEventListener(this.TABS_CHANGE_EVENT_NAME, e => {
      if (this.permalinkEnabled == true) {
        this.updateHistory(e.type, e.detail);
      }
    })
  }

  updateHistory(eventType, state) {
    const { location: { search: queryString } } = window;
    const params = new URLSearchParams(queryString);

    params.set('tab', state.paneId);

    (eventType !== this.TABS_INITIAL_EVENT_NAME)
      ? history.pushState(state, '', [location.origin, location.pathname, '?', params.toString()].join(''))
      : history.replaceState(state, '', [location.origin, location.pathname, '?', params.toString()].join(''));
  }
}
