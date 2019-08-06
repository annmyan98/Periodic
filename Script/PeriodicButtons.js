$(() => {
	var $main = $('<main>').appendTo('body'),
		$table = $('<table>', {
			appendTo: $main
		}),
		$tbody = $('<tbody>', {
			appendTo: $table
		}),

		$tfoot = $('<tfoot>', {
			appendTo: $table
		}),

		$h1 = $('<h1>', {
			appendTo: $table,
			'class': 'h1',
			text: 'Periodic Table of the Elements'
		});

	for (var i = 0; i < periods.length - 2; i++) {
		var $tr = $('<tr>', {
			appendTo: $tbody
		});
		for (var j = 0; j < periods[i].length; j++) {
			var $td = $('<td>', {
					'class': 'td ' + periods[i][j].class,
					appendTo: ('tr:eq(' + i + ')')
				}),
				$cell = $('<div>', {
					'class': 'cell',
					appendTo: $td
				}),
				$small = $('<small>', {
					appendTo: $cell,
					text: periods[i][j].atomicNumber
				}),
				$big = $('<big>', {
					appendTo: $cell,
					text: periods[i][j].symbol
				}),
				$strong = $('<strong>', {
					appendTo: $cell,
					text: periods[i][j].element
				}),
				$span = $('<span>', {
					appendTo: $cell,
					text: periods[i][j].mass
				});

			if (j < periods[i].length - 1) {
				var minus = periods[i][j + 1].group - periods[i][j].group;
				if (minus > 1) {
					var $EmptyTd = $('<td>', {
						'class': 'EmptyTd',
						colspan: minus - 1,
						appendTo: (`tr:eq(` + i + `)`)
					});
				}
			}
		}
	}

	var $marquee = $('<marquee>', {
		appendTo: $tbody
	});

	for (i = 8; i < periods.length; i++) {
		var $row = $('<tr>', {
			appendTo: $marquee
		});
		for (j = 0; j < periods[i].length; j++) {
			var $td = $('<td>', {
				'class': 'td ' + periods[i][j].class,
				appendTo: (`tr:eq(` + i + `)`)
				}),
				$cell = $('<div>', {
					'class': 'cell',
					appendTo: $td
				}),
				$small = $('<small>', {
					appendTo: $cell,
					text: periods[i][j].atomicNumber
				}),
				$big = $('<big>', {
					appendTo: $cell,
					text: periods[i][j].symbol
				}),
				$strong = $('<strong>', {
					appendTo: $cell,
					text: periods[i][j].element
				}),
				$span = $('<span>', {
					appendTo: $cell,
					text: periods[i][j].mass
				});
			}
		}

	for (var k = 0; k < buttons.length; k++) {
		$button = $('<button>', {
			'type': 'button',
			appendTo: $tfoot,
			'id': buttons[k].id,
			text: buttons[k].buttonName
		});
	}

	var Arr = ['alkali_metal', 'transition_metal', 'basic_metal', 'semi_metal', 'nonmetal', 'halogen', 'noble_gas', 'lanthanide', 'lanthanide', 'actinide'];

	Arr.forEach(function (item) {

		$(`#${item}`).click(function () {
			$(`.${item}`).toggleClass('animation');

			Arr.forEach(function (_item) {
				if (_item != item) {
					$(`.${_item}`).removeClass('animation');
				}
			});
		});
	});
});