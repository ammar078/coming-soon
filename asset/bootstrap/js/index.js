var countDownDare = new Date();//وضع السنة الحالية داخل متغير
countDownDare = new Date(countDownDare.getFullYear()+1 ,countDownDare.getMonth()-6 ,01 )//اول عنصر السنة الحالية +1 يعطي السنة القادمة و المتغير الثاني يعطي بعد 6 اشهر من تاريخ اليوم و الثالث هو يوم الشهر
//اصبح وقت المتغير بعد 6 اشهر من الان 
var x = setInterval(function(){
                    var now = new Date();
                    var diff = countDownDare - now //القرق بين تاريخ انطلاق اللعبة و الوقت الحالي 
                    var months = Math.floor(diff/(1000*60*60*24*30));
                    var days = Math.floor((diff%(1000*60*60*24*30))/(1000*60*60*24));
                    var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
                    var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
                    var seconds = Math.floor((diff%(1000*60))/1000);
                    document.getElementById('months').innerHTML = months;
                    document.getElementById('days').innerHTML = days;
                    document.getElementById('hours').innerHTML = hours;
                    document.getElementById('minutes').innerHTML = minutes;
                    document.getElementById('seconds').innerHTML = seconds;
},1000/*تكرار كل ثانية*/);
//الدال setinterval تحدد مدة زمنية وتكرار دالة داخلها 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
                    'use strict'
                  
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.querySelectorAll('.needs-validation')
                  
                    // Loop over them and prevent submission
                    Array.prototype.slice.call(forms)
                      .forEach(function (form) {
                        form.addEventListener('submit', function (event) {
                          if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                          }
                  
                          form.classList.add('was-validated')
                        }, false)
                      })
                  })()