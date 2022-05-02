
function log(content, style) {
    if (style == undefined) {
        console.log(content)
    } else {
        console.log('%c' + content, style)
    }
}

// Disable F11 for fullscreen
(()=>{
    $(document).on("keydown",(e)=>{
        if(e.keyCode===122) {
            log('Fullscreen is disabled!', 'color: red; background-color: white; padding: 1vw 2vh;')
            return false
        }
    })
})();