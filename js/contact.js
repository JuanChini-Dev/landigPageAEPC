// $(document).ready(function () {
//   ;(function ($) {
//     'use strict'

//     jQuery.validator.addMethod('answercheck', function (value, element) {
//       return this.optional(element) || /^\bcat\b$/.test(value)
//     })

//     // validate contactForm form
//     $(function () {
//       $('#contactForm').validate({
//         rules: {
//           name: {
//             required: true,
//             minlength: 4,
//           },
//           number: {
//             required: false,
//             minlength: 5,
//           },
//           email: {
//             required: true,
//             email: true,
//           },
//           phone: {
//             required: true,
//           },
//           message: {
//             required: true,
//             minlength: 20,
//           },
//         },
//         messages: {
//           name: {
//             required: 'Por favor, ingrese su nombre.',
//             minlength: 'Su nombre debe tener como minimo 4 caracteres.',
//           },
//           number: {
//             minlength: 'Su numero debe contener al menos 10 caracteres.',
//           },
//           email: {
//             required: 'Por favor, ingrese su correo electronico.',
//           },
//           phone: {
//             required: 'Por favor, ingrese su numero de telefono.',
//           },
//           message: {
//             required: 'Por favor, ingrese su consulta.',
//             minlength: 'Su consulta debe tener como minimo 10 caracteres.',
//           },
//         },
//         // submitHandler: function (form) {
//         //   $(form).ajaxSubmit({
//         //     type: 'POST',
//         //     data: $(form).serialize(),
//         //     url: 'contact_process.php',
//         //     success: function () {
//         //       $('#contactForm :input').attr('disabled', 'disabled')
//         //       $('#contactForm').fadeTo('slow', 1, function () {
//         //         $(this).find(':input').attr('disabled', 'disabled')
//         //         $(this).find('label').css('cursor', 'default')
//         //         $('#success').fadeIn()
//         //         $('.modal').modal('hide')
//         //         $('#success').modal('show')
//         //       })
//         //     },
//         //     error: function () {
//         //       $('#contactForm').fadeTo('slow', 1, function () {
//         //         $('#error').fadeIn()
//         //         $('.modal').modal('hide')
//         //         $('#error').modal('show')
//         //       })
//         //     },
//         //   })
//         // },
//       })
//     })
//   })(jQuery)
// })
