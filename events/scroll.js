

// window.addEventListener("scroll", debounce(()=>{
//     console.log("tao đang scroll nè :")
//     console.log(window.pageYOffset)
// }, 20)
// )

// window.addEventListener("scroll", ()=>{
//     console.log("tao đang scroll nè :")
// }
// )


const boxed = document.querySelector(".boxed")
boxed.scroll( 0, 100)
console.log(boxed.children)


function debounce(fn, ms) {
	let timer;
	
	return function() {
		// Nhận các đối số
		const args = arguments;
		const context = this;
		
		if(timer) clearTimeout(timer);
		
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, ms)
	}
}
