function submitToAPI(e) {

    // prevent default redirect
    e.preventDefault();

    // REST Endpoint
    var URL = "https://1yppsnty00.execute-api.us-east-1.amazonaws.com/Prod/contact-us";

    
    // Input validation
    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name").val())) {
                alert ("Name can not less than 2 characters");
        return;
    }
    if ($("#email").val()=="") {
        alert ("Please enter your email");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email").val())) {
        alert ("Please enter valid email address");
        return;
    }

    // Create JSON Object with data from contact form
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var data = {
       name : name,
       email : email,
       message : message
     };


    // Send data to REST Endpoint to Email

    // configure a request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', URL);

    // set headers
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // send request
    xhr.send(data);

    // listen for `load` event
    xhr.onload = () => {
        
        // clear form and show a success message
        console.log(xhr.responseText);
        alert("Your message has been sent. Thank you!");
        document.getElementById("contact-form").reset();
        location.reload();
    }

    // listen for `error` event
    xhr.onerror = () => {
        
         // show an error message
         var errorMessage = xhr.status + ': ' + xhr.statusText;
         alert("Email Sending Failed\nError Code: " + errorMessage);
    }

  }