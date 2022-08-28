const d = document
const w = window

export default function whatappButton(btn) {
  const $wp = d.querySelector(btn)

  w.addEventListener('scroll', (e) => {
    if (w.scrollY < 20) {
      $wp.classList.add('hidden')
    } else {
      $wp.classList.remove('hidden')
    }
  })
}
