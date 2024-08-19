const data = document.querySelector(".input-email")
const btn = document.querySelector(".btn")
const msg = document.querySelector(".err-msg")
const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")
const dismiss = document.querySelector(".dismiss")

console.log("object");

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

dismiss.addEventListener("click", (e) => {
    container2.style.display = "none"
    container.style.display = "flex"
})

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateEmail(data.value)) {
        console.log("yes");
        container2.style.display = "flex"
        container.style.display = "none"

    }
    else {
        msg.style.display = "block"
        data.classList.add("err-data")

        setTimeout(() => {
            msg.style.display = "none"
            data.classList.remove("err-data")
        }, 2000);
    }

})

