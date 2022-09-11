let courses = [
  {
    title: 'Perito Clasificador de Cereales',
    url: 'https://google.com',
    date_init: '01/03/2022',
    modality: 'Presencial',
    date_string: 'Marzo 2022',
  },
  {
    title: 'Perito Clasificador de Cereales',
    url: 'https://google.com',
    date_init: '01/05/2022',
    modality: 'Distancia',
    date_string: 'Mayo 2022',
  },
  {
    title: 'Tecnicatura Superior en Calidad y Comercializacion de Granos',
    url: 'https://google.com',
    date_init: '01/03/2022',
    modality: 'Distancia',
    date_string: 'Marzo 2022',
  },
  {
    title: 'Perito Clasificador de Cereales',
    url: 'https://google.com',
    date_init: '01/08/2022',
    modality: 'Distancia',
    date_string: 'Agosto 2022',
  },
]

document.addEventListener('DOMContentLoaded', function () {
  let urlHost = window.location.pathname
  let divIndexCourse = document.getElementById('indexCourses')
  let divCourse = document.getElementById('courses')
  let html = ''
  let course = courses.sort((a, b) => {
    return new Date(b.date_init) - new Date(a.date_init)
  })

  let courseSplit = course.slice(0, 3)

  if (!urlHost.includes('cource')) {
    for (const c in courseSplit) {
      html += `
        <div class="col-sm-6 col-lg-4 mb-1">
          <div class="single_special_cource">
            <img src="img/special_cource_3.png" class="special_img" alt="" />
            <div class="special_cource_text">
            <h4>Inicio: ${course[c].date_string}</h4>
              <a href=${course[c].url} class="btn_4">${course[c].modality}</a>
              <a href=${course[c].url}>
                <h3>${course[c].title}</h3>
              </a>
            <a href="${course[c].url}" class="btn_2">Ver mas</a>
           </div>
          </div>
        </div>`
    }
    divIndexCourse.outerHTML = html
  } else {
    for (const c in course) {
      html += `
        <div class="col-sm-6 col-lg-4 mb-1">
          <div class="single_special_cource">
            <img src="img/special_cource_3.png" class="special_img" alt="" />
            <div class="special_cource_text">
            <h4>Inicio: ${course[c].date_string}</h4>
              <a href=${course[c].url} class="btn_4">${course[c].modality}</a>
              <a href=${course[c].url}>
                <h3>${course[c].title}</h3>
              </a>
            <a href="${course[c].url}" class="btn_2">Ver mas</a>
           </div>
          </div>
        </div>`
    }
    divCourse.outerHTML = html
  }
})
