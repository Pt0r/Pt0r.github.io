function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
                    <div class="homeContent">
                        <h1>Introduction</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt vulputate tempor. 
                            Etiam venenatis auctor semper. Vestibulum porta ultrices libero, ut interdum massa maximus et. 
                            Praesent ut nibh auctor, commodo risus quis, rutrum orci. Morbi pulvinar, nisl id sollicitudin vestibulum, ante lacus luctus nisl, a bibendum lacus ex ut risus.
                        </p>
                        <p>
                            Donec molestie turpis vel cursus maximus. Donec maximus sapien nec sodales tincidunt. Mauris nec posuere sapien. Maecenas iaculis magna sit amet molestie ornare. 
                            Nunc maximus, nunc eu placerat rhoncus, nibh felis dictum ex, non faucibus dui odio in augue. Maecenas tempus hendrerit neque, sit amet ultricies tellus viverra sed.
                            Sed vulputate sapien sit amet est placerat feugiat. Vestibulum malesuada gravida tortor ut lobortis. Sed non sem commodo, interdum nisl ac, rutrum velit. 
                            In hac habitasse platea dictumst.
                        </p> 
                        <p>
                            Sed eget lacus pretium, aliquam dolor et, cursus eros. Fusce et lorem purus. Praesent vitae viverra magna, at facilisis sem.
                            Donec auctor faucibus cursus. Fusce pulvinar est vel mi convallis ullamcorper. Aliquam tincidunt nec nisl a sodales. Curabitur varius massa sodales aliquet congue.
                            Maecenas condimentum lorem ut sem faucibus efficitur. Pellentesque malesuada ex nec vulputate viverra. Sed vel enim rutrum, interdum ex at, iaculis metus.
                            Nullam non nunc quis lorem varius euismod. Cras vitae risus nec nisi sodales imperdiet. 
                            Nunc pulvinar sem arcu, nec euismod eros sollicitudin ut. 
                        </p>
                    </div>
                `;
			break;
		case 'talent':
			contentDiv.innerHTML = `
                    <div class="talentContent">
                        <div class="talentContainer">
                            <span class="talentInfo">
                                <h1>Talent 1</h1>
                                <p>
                                    Some info about the talent and some socials links here
                                </p>
                            </span>
                            <span class="talentPng">
                                <img src="/content/tuber.png"/>
                            </span>
                        </div>
                        <div class="talentContainer">
                            <span class="talentInfo">
                                <h1>Talent 2</h1>
                                <p>
                                    Some info about the talent and some socials links here
                                </p>
                            </span>
                            <span class="talentPng">
                                <img src="/content/tuber.png"/>
                            </span>
                        </div>
                    </div>
			`;
			break;
		case 'staff':
			contentDiv.innerHTML = ``;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}