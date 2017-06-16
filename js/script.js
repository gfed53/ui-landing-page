$(function(){
	function animateHeader(){
		$('header h1 span:nth-child(1)').velocity({
			opacity: 1
		},{
			duration: 1000,
			delay: 500
		});

		$('header h1 span:nth-child(2)').velocity({
			opacity: 1
		},{
			duration: 1000,
			delay: 1000
		});

		$('header h1 span:nth-child(4)').velocity({
			opacity: 1
		},{
			duration: 1000,
			delay: 1500
		});


	}

	function init(){
		animateHeader();
	}

	init();


});