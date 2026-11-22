const filters = document.querySelector('.filters');
const cards = Array.from(document.querySelectorAll('.tile'));
if (filters && cards.length) {
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const current = event.target.closest('button[data-filter]');
    if (!current) return;
    for (const button of filters.querySelectorAll('button')) {
      button.setAttribute('aria-pressed', String(button === current));
    }
    const category = current.dataset.filter;
    for (const card of cards) {
      card.hidden = category !== 'Tutti' && card.dataset.category !== category;
    }
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('#count').textContent = count === 1 ? '1 progetto visibile' : count + ' progetti visibili';
  });
}
