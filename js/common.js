// emailjs creds
const publicKey = '5F5quSdVkkaKVSler';
const serviceId = 'service_nvt606b';
const contactUsTemplateId = 'template_r8plg75';

function contactUs() {
    let spinner = $('#contactUsForm .spinner');
    let submitbtn = $('#contactUsForm').find('button[type="submit"]');
    let contactUs2Form = $('#contactUsForm')[0];
    let contactUsModal = $('#contactUsModal');

    submitbtn.hide();
    spinner.show();
    console.log("#contactUs-service");
    emailjs.send(
        serviceId, 
        contactUsTemplateId,
        {
            "name": $("#contactUs-name").val(),
            "email": $("#contactUs-email").val(),
            "service": $('#contactUs-service').val(),
            "contact": $("#contactUs-contact").val(),
            "message": $("#contactUs-message").val() 
            
        }).then(function (response) {
            contactUsModal.modal('show');
            contactUs2Form.reset();
            submitbtn.show();
            spinner.hide();
        }, function (error) {
            // window.location.replace('/index.html');
            // contactUsForm.reset();
            // submitbtn.show();
            // spinner.hide();
            console.log(error)
        });
}

$(function () {
    emailjs.init(publicKey);

    
});