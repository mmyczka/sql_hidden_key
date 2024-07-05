document.addEventListener('DOMContentLoaded', function() {
    const files = {
		'Steps': '../sql/key_1/steps.sql',
        'Oracle': '../sql/key_1/oracle.sql',
        'Postgres': '../sql/key_1/postgres.sql',
        'SQLServer': '../sql/key_1/sqlserver.sql',
        'MySQL': '../sql/key_1/mysql.sql'
    };

    for (const [key, value] of Object.entries(files)) {
        fetch(value)
            .then(response => response.text())
            .then(data => {
                document.getElementById(`${key.toLowerCase()}-code`).textContent = data;
				hljs.highlightElement(document.getElementById(`${key.toLowerCase()}-code`));
            });
    }
});


function toggleButton(evt) {
  // Retrieve the current button that triggered the event
  var button = evt.currentTarget;
  // Retrive answer buttons
  var buttons = document.querySelectorAll(`.tablinks`);

  // Toggle the button text
  if (button.textContent === 'Hide SQL') {
    button.textContent = 'Show SQL';
	buttons.forEach(content => content.style.visibility = 'hidden');
	
    tabcontent = document.querySelectorAll(`.tabcontent`);
    tabcontent.forEach(content => content.style.display = 'none');
	
	document.getElementById('Steps').style.display = 'block';
	
  } else {
    button.textContent = 'Hide SQL';
	buttons.forEach(content => content.style.visibility = 'visible');
	
    tabcontent = document.querySelectorAll(`.tabcontent`);
    tabcontent.forEach(content => content.style.display = 'none');
	
	// Filter buttons to find the one that contains the class 'active'
	var activeButton = Array.from(buttons).find(function(button) {
    return button.className.includes('active'); });
	
		activeButton.click();
  }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.querySelectorAll(`.tabcontent`);
    tabcontent.forEach(content => content.style.display = 'none');

    tablinks = document.querySelectorAll(`.tablinks`);
    tablinks.forEach(link => link.className = link.className.replace(' active', ''));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

function checkAnswer(evt, secret_key) {
    const secretKey = document.getElementById('passcode').value.trim();
    const feedback = document.getElementById('result');
    const nextLevelLink = document.getElementById('nextLevel');
    
    if (secretKey.toLowerCase() === secret_key.toLowerCase()) { // replace 'desired_key' with the actual secret key for the level
        feedback.textContent = 'Correct! Well done!';
        feedback.style.color = 'lime';
        nextLevelLink.style.display = 'block';
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.style.color = 'red';
    }
}
