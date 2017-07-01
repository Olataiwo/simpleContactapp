	window.$on = function(target, type,cb){
		target.addEventListener(type,cb,false);
		}


	define(["./core","./sb","./contactForm","contactDirectory"], function(CORE,sb,contactForm,contactDirectory) {


		CORE.addModule(contactForm.id, contactForm);
		CORE.addModule(contactDirectory.id, contactDirectory);

		contactForm.init();
		contactDirectory.init();

	});