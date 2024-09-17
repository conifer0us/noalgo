let idMatch = window.location.href.match(/^.*youtube.com\/watch\?v=(.{11}).*$/);

if (idMatch) {
    let vID = idMatch[1];
    window.location.replace(`https://youtube.com/embed/${vID}?rel=0`);
} else {
    if (!window.location.href.match(/^.*youtube\.com\/embed\/.*$/)) {
        history.back();
    }
    else {
        let hideRecCSS = document.createElement("style");
        hideRecCSS.innerText = ".ytp-suggestion-set { display: none }";
        document.head.appendChild(hideRecCSS);
    }
}