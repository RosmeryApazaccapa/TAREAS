function sendMail(params) {
  alert("Mensaje-correctamente enviado")
    var tempParams = {
      from_name: document.getElementById("fromName").value,
      to_name: document.getElementById("toName").value,
      message: document.getElementById("msg").value,
    };
  
     emailjs.send('Gmail','template_lh9hj2x',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
  }
  
  