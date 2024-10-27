window.addEventListener("load",()=>{
	console.log("LOADED")
	const face = document.getElementById("face")
	const eyes = document.getElementsByClassName("eyes")


	function berkedip(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	face.addEventListener("click", function() {	
		let kedip = berkedip(1,2);
		console.log(kedip)
        eyes[0].style.animation = 'none'; // Reset the animation
        eyes[1].style.animation = 'none'; // Reset the animation

        // Trigger reflow to reset animation
        void eyes[0].offsetWidth;

        // Set the animation again
        eyes[0].style.animation = `eyes 1s ease 0s ${kedip}`;
        eyes[1].style.animation = `eyes 1s ease 0s ${kedip}`;
    });
})
