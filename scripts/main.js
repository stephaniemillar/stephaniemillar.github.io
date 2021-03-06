var database

var loadDatabase = function()
{
	$.getJSON("http://www.whynotarhino.com/search.json", function(json)
	{
	    database = json;
	})
}

var search = function(query)
{
	var searchString = document.getElementById('search_box').value.toLowerCase()
	var list = document.getElementById('search_results')

	while (list.firstChild)
	{
		list.removeChild(list.firstChild)
	}

	$.each(database, function(i, v)
	{
		if (database[i].content.toLowerCase().indexOf(searchString) > 0)
		{
			var entry = document.createElement('li')
				entry.innerHTML = '<a href = "' + v.url + '">' + v.title + '</a>'
			list.appendChild(entry)
		}
	})
}

document.onkeydown = function(event) // For the "Escape" key
{
	if (event.keyCode == 27)
	{
		closeSearch()
	}
}

$(document).mouseup(function (e)
{
	var container = $('#search')

	if (!container.is(e.target) // if the target of the click isn't the container...
		&& container.has(e.target).length === 0) // ... nor a descendant of the container
	{
		container.hide()
	}
})

var closeSearch = function()
{
	var search = document.getElementById('search')
	
	if (search.style.display == 'block')
	{
		search.style.display = 'none'
	}
}

var toggleSearch = function()
{
	var search = document.getElementById('search')
	var searchBox = document.getElementById('search_box')

	if (search.style.display == 'none')
	{
		search.style.display = 'block'
		searchBox.focus()
	}
	else if (search.style.display == 'block')
	{
		search.style.display = 'none'
	}
	else // For initial, lazy setting
	{
		search.style.display = 'block'
		searchBox.focus()
	}
}

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