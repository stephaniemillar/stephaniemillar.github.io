var toggleMenu = function()
{
	var button = document.getElementById('hamburger')
	var menu = document.getElementById('hamburger_menu')

	if (menu.style.display == 'none')
	{
		menu.style.display = 'block'
		button.style.backgroundColor = '#ffffff'
		button.style.color = '#000000'
	}
	else
	{
		menu.style.display = 'none'
		button.style.backgroundColor = '#000000'
		button.style.color = '#ffffff'
	}
}