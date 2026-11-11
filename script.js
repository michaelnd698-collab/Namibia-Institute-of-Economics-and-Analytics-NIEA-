/* =========================================
   NIEA WEBSITE JAVASCRIPT
========================================= */


// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = primaryNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close navigation after clicking a link

    primaryNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            primaryNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}



// DYNAMIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}



// COURSE ENQUIRY BUTTONS

const courseLinks = document.querySelectorAll("[data-course]");

const interestField = document.getElementById("interest");

const messageField = document.getElementById("message");


courseLinks.forEach(link => {

    link.addEventListener("click", function () {

        const courseName = this.getAttribute("data-course");

        if (interestField) {

            interestField.value = "Training and courses";

        }

        if (messageField) {

            messageField.value =
                "Hello NIEA,\n\nI would like to enquire about your " +
                courseName +
                " programme. Please provide me with further information about the programme, availability and fees.\n\nThank you.";

        }

    });

});



// CONTACT FORM

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");


// Replace this with NIEA's confirmed business email.

const NIEA_EMAIL = "info@niea.com.na";


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const interest = document.getElementById("interest").value;

        const message = document.getElementById("message").value.trim();


        if (!name || !email || !interest || !message) {

            formStatus.textContent =
                "Please complete all fields before submitting.";

            return;

        }


        const subject = encodeURIComponent(
            "NIEA Website Enquiry - " + interest
        );


        const body = encodeURIComponent(

            "Dear NIEA Team,\n\n" +

            "I am contacting you through the NIEA website.\n\n" +

            "Name: " + name + "\n" +

            "Email: " + email + "\n" +

            "Area of Interest: " + interest + "\n\n" +

            "Message:\n" + message + "\n\n" +

            "Kind regards,\n" + name

        );


        const mailtoLink =
            "mailto:" + NIEA_EMAIL +
            "?subject=" + subject +
            "&body=" + body;


        formStatus.textContent =
            "Your email application will open shortly.";


        window.location.href = mailtoLink;

    });

}
