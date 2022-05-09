export default function Suggestion ({
	$target,
	initialState
}){
	this.$element = document.createElement('div')
	this.$element.className = 'Suggestion'
	$target.appendChild(this.$element)

	this.state = initialState

	this.setState = (nextState) => {
		this.state = nextState
		this.render()
	}

	this.render = () => {
		const { items } = this.state
		console.log("Suggestion rerender");
		console.log(items);
		if (items.length > 0){
			this.$element.style.display = 'block';
			this.$element.innerHTML = `
				<ul>
					${items.map((e, i) => `
						<li data-index="${i}">${e}</li>
					`).join('')}
				</ul>
			`;
		} else {
			this.$element.style.display = 'none';
		}
	}

	this.render();
}