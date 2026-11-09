/* =========================================
   NIEA WEBSITE JAVASCRIPT
========================================= */


/* MOBILE NAVIGATION */

const menuButton = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".primary-nav");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        navigation.classList.toggle("open", !isOpen);

        menuButton.textContent = isOpen ? "☰" : "✕";

    });


    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.textContent = "☰";

        });

    });

}


/* AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* COURSE ENQUIRY */

document.querySelectorAll("[data-course]").forEach(link => {

    link.addEventListener("click", () => {

        const interest = document.getElementById("interest");

        const message = document.getElementById("message");


        if (interest) {

            interest.value = "Training and courses";

        }


        if (message) {

            message.value =
                "I would like to enquire about: " +
                link.dataset.course +
                ". Please share further information.";

        }

    });

});


/* CONTACT FORM */

const contactForm = document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        if (!contactForm.reportValidity()) {

            return;

        }


        const formData = new FormData(contactForm);


        const name = formData.get("name");

        const email = formData.get("email");

        const interest = formData.get("interest");

        const message = formData.get("message");


        const subject = encodeURIComponent(
            "NIEA Website Enquiry: " + interest
        );


        const body = encodeURIComponent(

            "Name: " + name +
            "\nEmail: " + email +
            "\nArea of interest: " + interest +
            "\n\nMessage:\n" + message

        );


        // Replace this with NIEA's confirmed business email.

        const recipient = "info@niea.com.na";


        const status = document.getElementById("form-status");


        if (status) {

            status.textContent =
                "Your email application should open with your enquiry prepared. Please review and send it.";

        }


        window.location.href =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;

    });

}
