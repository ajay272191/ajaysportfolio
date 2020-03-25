
import $ from 'jquery'

//console.log('gfdsfdgs sdsg');




document.addEventListener("submit", e => {
        e.preventDefault();
        //console.log('hey in here');
        const email = document.getElementsByClassName('email')[0].value;
      //  console.log(email);
        const subject  = document.getElementsByClassName('name')[0].value;
        //console.log(subject);
        const text  = document.getElementsByClassName('message')[0].value;
        //console.log(text);

        const data = {
          email,
          subject,
          text
        };
        //console.log(data);

        $.post("https://kumarajay.herokuapp.com/email", data).then(
          alert('message send!!'),
          window.location.href="./../index.html"
          );
      });
