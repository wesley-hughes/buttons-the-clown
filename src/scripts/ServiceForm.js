import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumberOfAttendees = document.querySelector("input[name='numberAttendees']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userServiceDate = document.querySelector("input[name='serviceDate']").value
        const userHoursRequested = document.querySelector("input[name='hoursRequested']").value
        const userCompleted = true

        // Make an object out of the user input
        const dataToSendToAPI = {
            ParentName: userParentName,
            ChildName: userChildName,
            NumberOfAttendees: userNumberOfAttendees,
            Address: userAddress,
            ServiceDate: userServiceDate,
            HoursRequested: userHoursRequested,
            Completed: userCompleted

        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name:</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name:</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberAttendees">Number of Attendees:</label>
            <input type="number" name="numberAttendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address:</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="hoursRequested">Hours Requested:</label>
            <input type="number" name="hoursRequested" class="input" />
        </div>
       

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}