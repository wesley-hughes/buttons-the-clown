import { fetchRequests, fetchClowns, fetchCompletions } from "./dataAccess.js"
import { BubblesTheClown } from "./BubblesTheClown.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = BubblesTheClown()
            }
        )
}

render()