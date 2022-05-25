
function checkPassword(form) {
password1 = form.password1.value;
password2 = form.password2.value;
// If password not entered
if (password1 == '')
	alert ("Пожалуйста, введите пароль!");
// If confirm password not entered
	else if (password2 == '')
	alert ("Пожалуйста, подтвердите пароль!");
// If Not same return False.
	else if (password1 != password2) {
	alert ("Введенные пароли не совпадают. Повторите попытку снова.")
return false;
}
// If same return True.
	else{
	return true;
}
}
