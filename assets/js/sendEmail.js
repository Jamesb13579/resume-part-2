function sendMail(contactForm){
    emailjs.send("service_n6f8tcs","rosie_1",{
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value  
    })
    .then(
        function(response){
            console.log("Success", response);
            alert ("message sent")
        },
        function(error){
            console.log("Failed", error);
    });
    return false
    
}