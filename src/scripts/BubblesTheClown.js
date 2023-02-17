import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const BubblesTheClown = () => {
    return `
        <h1>Bubbles and Lollipop Non-Scary Clown Service</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}