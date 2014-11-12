var toggleMenu = function()
{
	var pattyTop = document.getElementById('patty_top')
	var pattyMiddle = document.getElementById('patty_middle')
	var pattyBottom = document.getElementById('patty_bottom')
	var button = document.getElementById('hamburger')
	var menu = document.getElementById('hamburger_menu')

	if (menu.style.display == 'none')
	{
		menu.style.display = 'block'
		button.style.backgroundColor = '#ffffff'
		pattyTop.style.backgroundColor = '#000000'
		pattyMiddle.style.backgroundColor = '#000000'
		pattyBottom.style.backgroundColor = '#000000'
	}
	else
	{
		menu.style.display = 'none'
		button.style.backgroundColor = '#000000'
		pattyTop.style.backgroundColor = '#ffffff'
		pattyMiddle.style.backgroundColor = '#ffffff'
		pattyBottom.style.backgroundColor = '#ffffff'
	}
}