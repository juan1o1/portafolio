;(function(){

	let sticky = false
	let currentPosition = 0

	const imageCounter = 7
	const email = "jesusandrade7643198250@gmail.com"

	$("#contact_form").on("submit",function(event){
		event.preventDefault()

		sendForm($(this))

		return false
	})

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	$("#menu-opener").on("click", function(){
		$("#responsive-nav ul").toggleClass("active")
	})


	setInterval(()=>{

		if(currentPosition < imageCounter){
			currentPosition++
		}else{
			currentPosition = 0
		}
		
		$("#gallery .inner").css({
			left: "-"+currentPosition*100+"%"
		})	

	},4000)

	$(window).scroll(()=>{
		const inButtom = isInButtom()

		if(inButtom && !sticky){
			//Mostrar la navegacion sticky
			sticky = true
			stickNavigation()
		}
		if (!inButtom && sticky) {
			//Ocultar la navegacion sticky
			sticky = false
			unStickNavigation()
		}
	})
	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")

		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}
	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")

		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}

	function isInButtom(){
		const $description = $("#description")
		const descriptionHeight	= $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}
	
})()