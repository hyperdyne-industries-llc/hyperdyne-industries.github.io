// let calc_scroll = () => Math.floor((3.75 * (0.25 + Math.floor(window.scrollY) / Math.floor(document.body.scrollHeight - window.innerHeight))) - 0.75)

let calc_scroll = () => Math.floor((4 * (0.25 + Math.floor(window.scrollY) / Math.floor(document.body.scrollHeight - window.innerHeight))) - 0.25)
document.onscroll = (ev) => { document.body.dataset.scroll = calc_scroll() }