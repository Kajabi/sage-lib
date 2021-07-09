function scrollToActiveNavItem() {
  const activeNavItemClass = ".sage-nav__list--sub .sage-nav__link--active";
  const activeNavItem = document.querySelector(activeNavItemClass);

  activeNavItem.scrollIntoView({ block: "center" });
}

document.addEventListener("DOMContentLoaded", event => {
  scrollToActiveNavItem();
});
