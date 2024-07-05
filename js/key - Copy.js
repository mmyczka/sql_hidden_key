
document.addEventListener('DOMContentLoaded', function() {
    loadSqlFiles();
});

function loadSqlFiles() {
    const keyLevel = document.querySelector('.container').getAttribute('data-key-level');
    const files = {
        'Steps': `../sql/key_${keyLevel}/steps.sql`,
        'Oracle': `../sql/key_${keyLevel}/oracle.sql`,
        'Postgres': `../sql/key_${keyLevel}/postgres.sql`,
        'SQLServer': `../sql/key_${keyLevel}/sqlserver.sql`,
        'MySQL': `../sql/key_${keyLevel}/mysql.sql`
    };

    for (const [key, value] of Object.entries(files)) {
        fetch(value)
            .then(response => response.text())
            .then(data => {
                document.getElementById(`${key.toLowerCase()}-code`).textContent = data;
                hljs.highlightElement(document.getElementById(`${key.toLowerCase()}-code`));
            });
    }
}

function toggleButton(evt) {
    var button = evt.currentTarget;
    var buttons = document.querySelectorAll('.tablinks');

    if (button.textContent === 'Hide SQL') {
        button.textContent = 'Show SQL';
        buttons.forEach(content => content.style.visibility = 'hidden');
        tabcontent = document.querySelectorAll('.tabcontent');
        tabcontent.forEach(content => content.style.display = 'none');
        document.getElementById('Steps').style.display = 'block';
    } else {
        button.textContent = 'Hide SQL';
        buttons.forEach(content => content.style.visibility = 'visible');
        tabcontent = document.querySelectorAll('.tabcontent');
        tabcontent.forEach(content => content.style.display = 'none');

        var activeButton = Array.from(buttons).find(button => button.className.includes('active'));
        activeButton.click();
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach(content => content.style.display = 'none');

    tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(link => link.className = link.className.replace(' active', ''));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

function checkAnswer(evt, secret_key) {
    const secretKey = document.getElementById('passcode').value.trim();
    const feedback = document.getElementById('result');
    const nextLevelLink = document.getElementById('nextLevel');

    const keyLevel = document.querySelector('.container').getAttribute('data-key-level');
    
    fetch(`../sql/key_${keyLevel}/key.sql`)
        .then(response => response.text())
        .then(secret_key_1 => {
            if (secretKey.toLowerCase() === secret_key_1.trim().toLowerCase()) {
                feedback.textContent = 'Correct! Well done!';
                feedback.style.color = 'lime';
                nextLevelLink.style.display = 'block';
            } else {
                feedback.textContent = 'Incorrect. Try again!';
                feedback.style.color = 'red';
            }
        })
        .catch(error => {
            feedback.textContent = 'Error fetching the key. Please try again later.';
            feedback.style.color = 'orange';
            console.error('Error fetching key:', error);
        });
}


function loadNextLevel() {
    const container = document.querySelector('.container');
    let keyLevel = parseInt(container.getAttribute('data-key-level'), 10);
    keyLevel += 1;
    container.setAttribute('data-key-level', keyLevel);
    container.querySelector('.header h1').textContent = `SQL Secret Key: ${keyLevel}`;
    document.getElementById('passcode').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('nextLevel').style.display = 'none';

    loadSqlFiles();
}