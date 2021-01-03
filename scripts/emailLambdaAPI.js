function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://1yppsnty00.execute-api.us-east-1.amazonaws.com/Prod/contact-us";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name").val())) {
                      alert ("Name can not less than 2 char");
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

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var data = {
       name : name,
       email : email,
       message : message
     };

    $.ajax({
      type: "POST",
      url : "https://1yppsnty00.execute-api.us-east-1.amazonaws.com/Prod/contact-us",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Your message has been sent. Thank you!");
        document.getElementById("contact-form").reset();
    location.reload();
      },
      error: function (xhr, status, error) {
        // show an error message
        var errorMessage = xhr.status + ': ' + xhr.statusText;
        alert("Email Sending Failed\nError Code: " + errorMessage);
      }});
  }