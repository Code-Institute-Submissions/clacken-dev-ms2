//This function is called by clicking the submit button in the contact form. It passes the form details as parameters to be sent in an email. There is no page refresh after sending
// so after sending the page is cleared and a success message is displayed to the user if the service returns a "Success" status. If not an error is displayed and the user is asked to try again

function sendMail(contactForm){
    emailjs.send("service_kzd89jn", "template_8rzpgkv", {
    "first_name" : contactForm.fname.value,
    "last_name": contactForm.lname.value,
    "email_address": contactForm.email.value,
    "travel_method": contactForm.travel.value,
    "message": contactForm.message.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
            document.getElementById("contact-form").innerHTML = `
            <div class="container-fluid form-submitted">
                <p class="submission-confirmation">Your form was successfully submitted! </p>
            </div>
            `;
        },
        function(error){
         console.log("FAILED", error);
         document.getElementById("contact-form").innerHTML = `
            <div class="container-fluid form-submitted">
                <p class="submission-confirmation">There was an error submitting your form, please refresh the page and try again. </p>
            </div>
            `;
        });
    return false;  // To block from loading a new page

    
}