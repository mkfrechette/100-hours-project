//when click on one, style other to be hidden
//use conditionals
document.querySelector('.signupFormStylist').addEventListener('click', toggleHiddenStylist)

function toggleHiddenStylist(){
    
	document.querySelector(".stylistSignup").classList.toggle('hidden')
}

document.querySelector('.signupFormModel').addEventListener('click', toggleHiddenModel)

function toggleHiddenModel(){
    /*document.querySelector('.modelSignup').classList.remove('hidden')*/
    document.querySelector(".modelSignup").classList.toggle('hidden')
	
}