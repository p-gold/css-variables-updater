const controls = document.querySelectorAll('.controls input');

function update(){
    const suffix = this.dataset.sizing || ' '; 
    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

controls.forEach(input => input.addEventListener("change", update))
controls.forEach(input => input.addEventListener("mousemove", update))

