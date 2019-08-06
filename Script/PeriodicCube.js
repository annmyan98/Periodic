$(function () {
	var i = 0,
		$main = $('<main>').appendTo('body'),
		$table = $('<div>', {
			'id': 'cube',
			appendTo: $main
		});

	for (var d = 0; d < period.length; d++) {
			var $div = $('<div>', {
				'class': Divs[d].class,
				appendTo: $table
			});

			for (var i = 0; i < period[d].length; i++) {
				var $cell = $('<div>', {
						'class': 'cell',
						appendTo: $div
					});
						$rt = $('<rt>', {
							text: period[d][i].atomicNumber,
							appendTo: $cell
						}),

						$ruby = $('<ruby>', {
							text: period[d][i].symbol,
							appendTo: $cell
						}),

						$strong = $('<strong>', {
							text: period[d][i].element,
							appendTo: $cell
						}),

						$span = $('<span>', {
							text: period[d][i].mass,
							appendTo: $cell
						});
			}
	}

		$('main').on('mousemove', function (e) {
			var degX = 360 * (e.pageY / $(document).height());
			var degY = 360 * (e.pageX / $(document).width());////

			$table.css('transform', 'translateZ(-100px) rotateX(' + degX + 'deg) rotateY(' + degY + 'deg) ');////``
		});

		var lastMouseX = 0,
			lastMouseY = 0,
			rotX = 0,
			rotY = 0;

		$(document).on('mousedown', function (ev) {
			lastMouseX = ev.clientX;
			lastMouseY = ev.clientY;
			$(document).on('mousemove', mouseMoved);
		});
		$(document).on('mouseup', function () {
			$(document).off('mousemove', mouseMoved);
		});

		function mouseMoved(ev) {
			var deltaX = ev.pageX - lastMouseX,
				deltaY = ev.pageY - lastMouseY;

			lastMouseX = ev.pageX;
			lastMouseY = ev.pageY;

			rotY -= deltaX * 0.1;
			rotX += deltaY * 0.1;

			$('#cube').css('transform', 'translateZ( -100px) rotateX( ' + rotX + 'deg) rotateY(' + rotY + 'deg)');///`
		}
	
});