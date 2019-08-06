$(function () {
	var j = 0,
		$main = $('<main>').appendTo('body'),
		$centered = $('<div>', {
			'class': 'table',
			appendTo: $main
		}),
		$h1 = $('<h1>', {
			text: 'Periodic Table of the Elements',
			appendTo: $centered
		}),
		$div = $('<div>', {
			'class': 'window',
			appendTo: $centered
		});

	for (var i = 0; i < 5 && j < periods.length; i++) {
		var $tbody = $('<div>', {
			'class': 'tbody',
			appendTo: $centered
		}),
		previousPeriod = periods[j];
		while (j < periods.length && (periods[j].length == previousPeriod.length)) {
			var period = periods[j];
				$row = $('<div>', {
				'class': 'row',
				appendTo: $tbody
			});
			for (var k = 0; k < periods[j].length; k++) {
				var $cell = $('<div>', {
						'class': 'cell ' + periods[j][k].class,
						appendTo: (`.row:eq(` + j + `)`)
					}),

					$cellElem = $('<div>', {
						'class': 'cellElem',
						appendTo: $cell
					}),

					$ruby = $('<ruby>', {
						text: periods[j][k].symbol,
						appendTo: $cellElem
					}),

					$rt = $('<rt>', {
						text: periods[j][k].atomicNumber,
						appendTo: $ruby
					}),

					$strong = $('<strong>').appendTo($cellElem),

					$a = $('<a>', {
						href: 'https://en.wikipedia.org/wiki/' + periods[j][k].element,
						text: periods[j][k].element,
						appendTo: $strong
					}),

					$span = $('<span>', {
						text: periods[j][k].mass,
						appendTo: $cellElem
					});

				if (k < periods[j].length - 1) {
					var minus = periods[j][k + 1].group - periods[j][k].group;
					if (minus > 1) {
						var $emptyDiv = $('<div>', {
							'class': '$emptyDiv',
							appendTo: (`.row:eq(` + j + `)`)
						});
					}
				}
			}
			previousPeriod = periods[j];
			j++;
		}
	}

	$('.cell').mouseover((e) => {
		var $elem = $(e.target).closest($('.cell')).clone();
		$elem.attr('id', 'change'),
			$('.window').empty(),
			$elem.appendTo($('.window'));
	});

	$('.other').mouseover((e) => {
		$('.window').empty();
	});
});