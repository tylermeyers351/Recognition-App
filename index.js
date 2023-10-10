import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: ""
}

// Elements
const categoryEl = document.querySelector('#inputState')
const titleEl = document.querySelector('#formTitle')
const contentEl = document.querySelector('#formContent')
const submitButtonEl = document.querySelector('#submitButton')
const listingEl = document.querySelector('#notesListing')

// Store the date
const d = new Date()
const dateObject = {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate()
}

submitButtonEl.addEventListener('click', function() {
    updateListing(titleEl.value, categoryEl.value, contentEl.value)
})

// Function that updates the listing with the newly added listing object (and clears form values).
function updateListing(titleValue, categoryValue, contentValue) {

    let newEl = document.createElement('li')
    newEl.classList.add('border', 'rounded', 'p-3', 'mb-2')

    // Update title plus category.
    const titleP = document.createElement('p')
    titleP.classList.add('fw-bold')
    titleP.textContent = titleValue + ' - ' + categoryValue

    // Update date.
    const dateP = document.createElement('p')
    dateP.classList.add('small')
    dateP.textContent =  dateObject.month + "/" + dateObject.day + "/" + dateObject.year

    // Update content.
    const contentP = document.createElement('p')
    contentP.classList.add('small')
    contentP.textContent = contentValue

    // Append <li> tag.
    newEl.append(titleP)
    newEl.append(dateP)
    newEl.append(contentP)

    // Append <ul> tag.
    listingEl.append(newEl)

    // Clear values.
    categoryEl.selectedIndex = 0
    titleEl.value = ""
    contentEl.value = ""
}

