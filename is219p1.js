window.onload=function(){

    // dropdown
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    function myFunctionTwo() {
      document.getElementById("myDropdownTwo").classList.toggle("show");
    }

        function pressed() {
          document.getElementById('dropbtn').classList.toggle('pressed');
        }
        function pressedTwo() {
          document.getElementById('dropbtnTwo').classList.toggle('pressed');
        }

    // show experience
    function experience() {
      document.getElementById('dropdownLeft').classList.toggle('experience-showed');
    }
    function experiencePressed() {
      document.querySelector('.btn-experience').classList.toggle('experience-pressed');
    }
    let btnExperience = document.querySelector('.btn-experience');
    btnExperience.addEventListener('click', experiencePressed);

    let inputForm = document.querySelectorAll('.contact-input');

    let submit = document.querySelector('.contact-submit');

    let frst = document.getElementById('first');
    let last = document.getElementById('last');
    let email = document.getElementById('email');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let em = document.getElementById('em');





    inputForm.forEach(function(element) {
      element.addEventListener('click', function() {
        element.classList.toggle('contact-input-active')
      });
    });

    submit.addEventListener('click', submitted);


    function submitted() {
      submit.classList.toggle('contact-submit-active');
      frst.remove();
      last.remove();
      email.remove();
      fname.remove();
      lname.remove();
      em.remove();
      submit.remove();
      let gotcha = document.createElement('h3');
      let t = document.createTextNode("that info didn't go anywhere :)");
      gotcha.appendChild(t);
      document.querySelector('.contact').appendChild(gotcha);
      document.querySelector('.contact h1').innerHTML = 'oops...';
    }
    
  };
