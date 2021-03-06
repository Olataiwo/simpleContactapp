
define(["./sb"], function(sb) {

	var el, name, phone, add, id;

	id = "add-contact";

			function init(){
				el = document.getElementById("add-contact");
				name = document.getElementsByClassName("contact-name")[0];//this is each input field it is called explicitly
				phone = document.getElementsByClassName("phone-number")[0];
				add = document.getElementsByClassName("submit")[0];

				
				
				//register event handlers
				$on(add, "click", addContacts);

				sb.listen({"show-up":displayForm},id)
			}


			function addContacts(e){
				var contactDetails = {};

				contactDetails.username = name.value;
				contactDetails.userphone = phone.value;

				sb.notify({
					type: "add-contact",
					data: contactDetails
				});
				el.reset();

				el.classList.toggle("module-active");
				e.preventDefault();
			}

			function displayForm(){
				el.classList.toggle("module-active");
			}

			return{
				id:id,
				addContacts:addContacts,
				init:init,
				displayForm:displayForm
			}

});