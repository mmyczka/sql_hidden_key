function copyCode(button) {
    const codeContainer = button.nextElementSibling;
    const code = codeContainer.innerText;

    navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
            button.innerText = "Copy Code";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
