function getCookie(cookie_name) {
	var cookie_array = document.cookie.split('; ');
	var cookie_value = false;
	for (var i = 0; i < cookie_array.length; i++){
		if (cookie_array[i].includes(cookie_name)){
			cookie_value = cookie_array[i].split('=')[1];
		}
	}
	return cookie_value;
}