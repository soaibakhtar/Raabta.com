import { navbar } from "./components/navbar.js"
import { footer } from "./components/footer.js";

const header = document.querySelector('.navbar')

header.innerHTML = navbar();

const footerDiv = document.querySelector('footer')

footerDiv.innerHTML = footer()

const toggleBtn = document.querySelector('.toggle-button')
        const dropdown = document.querySelector('.dropdown-menu')

        toggleBtn.addEventListener("click", () => {
            dropdown.classList.toggle('top-16')
        })


        