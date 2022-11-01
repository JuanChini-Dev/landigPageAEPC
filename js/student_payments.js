const $table = d.querySelector('#student_payments')
const $template = d.getElementById('student_payments_template').content
const $fragment = d.createDocumentFragment()
const $document = d.querySelector('#student_document')
const $name = d.querySelector('#student_name')
const $course = d.querySelector('#student_course')
const $year = d.querySelector('#student_year')
const url = 'http://localhost:3000/datapayment/2'

const getAllStudents = async () => {
  try {
    let res = await fetch(`${url}`)
    let json = await res.json()
    let orders_and_payments = json.orders_and_payments

    $document.innerHTML += `<p>${json.student_document}</p>`
    $name.innerHTML += `<p>${json.full_name}</p>`
    // $document.innerHTML += `<p>${json.student_document}</p>`
    // $document.innerHTML += `<p>${json.student_document}</p>`

    orders_and_payments.forEach((el) => {
      $template.querySelector('.order_id').textContent = el.order_id
      $template.querySelector('.order_description').textContent =
        el.order_description
      $template.querySelector('.order_date').textContent = el.order_date
      $template.querySelector('.order_value').textContent = el.order_value
      $template.querySelector('.payment_value').textContent = el.payment_value
      $template.querySelector('.balance').textContent = el.balance

      if (el.balance === 0) {
        $template.querySelector('.payment_id').classList.add('d-none')
        $template.querySelector('.print_id').classList.remove('d-none')
        $template.querySelector('.print_id').dataset.receipt = el.order_id
      } else {
        $template.querySelector('.print_id').classList.add('d-none')
        $template.querySelector('.payment_id').classList.remove('d-none')
        $template.querySelector('.payment_id').dataset.balance = el.balance
      }

      $fragment.appendChild($template.cloneNode(true))
    })
    $table.appendChild($fragment)

    if (!res.ok) {
      throw { status: res.status, statusText: res.statusText }
    }
  } catch (err) {
    console.log(err)
  }
}

// click event to payment

// click event to print receipt
d.addEventListener('click', (e) => {
  if (e.target.matches('.print_id')) {
    alert(e.target.dataset.receipt)
  }
})

d.addEventListener('click', (e) => {
  if (e.target.matches('.payment_id')) {
    alert(e.target.dataset.balance)
  }
})

getAllStudents()
