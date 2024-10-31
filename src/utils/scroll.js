export const smoothScroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}; 