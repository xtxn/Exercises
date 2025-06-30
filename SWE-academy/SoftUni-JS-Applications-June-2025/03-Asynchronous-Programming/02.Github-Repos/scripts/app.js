function loadRepos() {

	const input = document.getElementById('username');
	const userName = input.value;
	const list = document.getElementById('repos');
	let url = `https://api.github.com/users/${userName}/repos`

	fetch(url)
		.then(handleResponse)
		.then(handleData)
		.catch(handleError)

	function handleResponse(response) {
		if (response.ok) {
			return response.json();
		} else {
			throw response.json();
		};
	};

	function handleData(data) {
		list.replaceChildren();

		data.forEach(repo => {
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.setAttribute('href', repo.html_url);
			a.textContent = repo.full_name;
			li.appendChild(a);
			list.appendChild(li);
		});
	};

	function handleError(errorPromise) {
		errorPromise.then(error => list.replaceChildren([error.message]));
	};

}