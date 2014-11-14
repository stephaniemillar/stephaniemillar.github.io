var database

var loadDatabase = function()
{
	$.getJSON("http://stephaniemillar.github.io/search.json", function(json)
	{
	    database = json;
	})
}

var search = function(query)
{
	// var searchString = document.getElementById('searchbox').value
	var results = 0

	$.each(database, function(i, v)
	{
		if (database[i].content.toLowerCase().indexOf(query) > 0)
		{
			results++
			console.log(v.title)
		}
	})

	console.log(results + ' result(s)')
}

var showSearch = function()
{
	var searchBar = document.getElementById('search_bar')
	var leftNav = document.getElementById('left_nav')
	var rightNav = document.getElementById('right_nav')

	searchBar.style.display = 'block'
	leftNav.style.display = 'none'
	rightNav.style.display = 'none'
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