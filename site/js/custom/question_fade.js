const content = [
    "Looking to make some changes in your life?",
    "Going through a difficult life event?",
    "Do you feel you're struggling, and want someone to talk to?",
]
const phasePeriod = 3000
let current_pos = 0
const updateDoc = (new_content) => {
    document.getElementById("question").innerHTML = new_content
    document.getElementById("question").classList.replace("fade", "unfade")
}

setInterval(() => {
    current_pos = (current_pos + 1) % 3
    updateDoc(content[current_pos])
}, phasePeriod)


setTimeout(() => {
    document.getElementById('question').classList.replace("unfade", 'fade')

    setInterval(() => {
        document.getElementById('question').classList.replace("unfade", 'fade')
    }, phasePeriod)
}, phasePeriod - 400)