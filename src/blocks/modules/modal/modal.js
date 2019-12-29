import $ from "jquery";

$('.popup, .callback-btn').click( (evt)=> {
	evt.preventDefault();
	$('.overlay').fadeIn();
});

$('.overlay').click( ()=> {
	$('.modal').fadeOut();
	$('.overlay').fadeOut();
});

$('.modal__close').click(()=> {
	$('.modal').fadeOut();
	$('.callback').fadeOut();
	$('.overlay').fadeOut();
});

function showModal(btn, modal) {
	$(btn).click( (evt)=> {
		evt.preventDefault();
		$(modal).fadeIn();
		let top = pageYOffset + 60;
		$(modal).css('top', top);
	});
}

function showCallback(btn,modal) {
	$(btn).click( (evt)=> {
		evt.preventDefault();
		$('.modal').fadeOut();
		$(modal).fadeIn();
		let top = pageYOffset + 60;
		$(modal).css('top', top);
	});
};

showCallback($('.callback-btn'),$('.callback'));
showModal($('.popup--promo'), $('.modal--promo'));
showModal($('.popup--distinction'), $('.modal--distinction'));
showModal($('.popup--method-01'), $('.modal--method-01'));
showModal($('.popup--method-02'), $('.modal--method-02'));
showModal($('.popup--method-03'), $('.modal--method-03'));