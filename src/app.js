$('#form').on('submit', function(e) {
	e.preventDefault();

	name = $('.name').val();
	email = $('.email').val();
	body = $('.message').val();

	if (name.length < 1 || email.length < 1 || body.length < 1) {
		// Missing info
	} else {
		sendForm(name, email, body)
	}
});

function sendForm(name, email, body) {
	$.ajax({
		type: 'POST',
		url: '/email',
		data: {
			name: name,
			email: email,
			body: body
		},
		success: function(res) {
			// Succesful
		},
		error: function(res) {
			// Error
		}
	});
}