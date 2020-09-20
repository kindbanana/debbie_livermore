const digital = {
    className: "digital",
    title: "DIGITAL",
}
const smarter = {
    className: "smarter",
    title: "SMARTER",
}
const secure = {
    className: "secure",
    title: "SECURE",
}
const things = [digital, smarter, secure]
let current_pos = 0
const updateDoc = (old_content, new_content) => {
    document.getElementById('descriptor').innerHTML = new_content.title;
    document.getElementById("custom-background").classList.replace(old_content.className, new_content.className)

}

setInterval(() => {
    let old_pos = current_pos
    current_pos = (current_pos + 1) % 3
    updateDoc(things[old_pos], things[current_pos])
}, 3500)