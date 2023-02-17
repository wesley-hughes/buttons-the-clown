import { getRequests, deleteRequest, getClowns, saveCompletion, changeRequest } from "./dataAccess.js"



const convertRequestToListElement = (request) => {
    const clowns = getClowns()
    let html = ""
    html += `<tr>
`
    if (request.completed) {
        html += `<td class="completions">${request.ChildName}</td><td class="completions"></td><td class="completions"><button class="request__delete"
    id="request--${request.id}">
    Delete
    </button></tr>`
    }
    else {
        html += `<td>${request.ChildName} </td>
<td><select class="clowns" id="clowns">
<option value="">Choose</option>
${clowns.map(
            clown => {
                return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
            }</td>
<td></select>
<button class="request__delete" id="request--${request.id}">Delete</button></td>
`
    }
    return html
}

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            // const completion = {requestId: requestId, clownId: clownId, date_created: Date.now() }

            // saveCompletion(completion)
            const requests = getRequests()
            const foundRequest = requests.find((request) => {
                return request.id === parseInt(requestId)
            })
            foundRequest.completed = true
            changeRequest(requestId, foundRequest)
        }
    }
)

export const Requests = () => {
    const requests = getRequests()

    let html = ""
    html += `<table class="requestsTable"><tr>
    <th>Description</th>
    <th>Completed By</th>
    <th>Delete</th>
  </tr>`
    let listItems = requests.map(convertRequestToListElement)
    html += listItems.join("")
    html += `</table>`
    return html
}



mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})