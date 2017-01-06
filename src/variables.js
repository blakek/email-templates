module.exports = {
	title: 'Title goes here',
	previewText: '',
	emailWidth: 600,

	backdropColor: '#dddddd',
	backgroundColor: '#ffffff',
	backgroundAltColor: '#f0f0f0',
	brandPrimary: '#004B85',
	baseFontColor: '#464646',
	mutedFontColor: '#606971',
	contrastingFontColor: '#f0f0f0',

	baseFontFamily: 'Trebuchet MS, Helvetica Neue, Helvetica, Arial, sans-serif',
	headingFontFamily: 'Georgia, serif',

	/* the next keys correspond to the pre-made sections/partials */
	header: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		image: {
			src: 'http://placehold.it/160x80',
			alt_text: 'header image'
		},
		date: 'December 2, 2015'
	},

	image: {
		src: 'http://placehold.it/600x300',
		alt_text: 'main image'
	},

	image_columns: {
		column1: {
			image: {
				src: 'http://placehold.it/160',
				alt_text: 'column 1 image'
			},
			text: 'Column1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
			button: {
				link: 'http://google.com',
				text: 'A Button Column 1'
			}
		},
		column2: {
			image: {
				src: 'http://placehold.it/160',
				alt_text: 'column 2 image'
			},
			text: 'Column2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
			button: {
				link: 'http://google.com',
				text: 'A Button Column 2'
			}
		},
	},

	text_basic: {
		text: 'Ulla nec est tristique, tempor lacus eu, aliquam erat. Cras tristique, arcu ac tristique hendrerit, urna diam mollis libero, vitae gravida nisi lectus in leo. Aenean eu ligula id nisi euismod dapibus et eu mauris. Donec quis dictum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
	},

	text_button: {
		text: 'Ulla nec est tristique, tempor lacus eu, aliquam erat. Cras tristique, arcu ac tristique hendrerit, urna diam mollis libero, vitae gravida nisi lectus in leo. Aenean eu ligula id nisi euismod dapibus et eu mauris. Donec quis dictum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
		button: {
			link: 'http://google.com',
			text: 'A Button!'
		}
	},

	text_call_to_action: {
		text: 'Ulla nec est tristique, tempor lacus eu, aliquam erat. Cras tristique, arcu ac tristique hendrerit, urna diam mollis libero, vitae gravida nisi lectus in leo. Aenean eu ligula id nisi euismod dapibus et eu mauris. Donec quis dictum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
		button: {
			link: 'http://google.com',
			text: 'This is a call to action!'
		}
	},

	text_columns: {
		column1: {
			text: 'Column1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
		},
		column2: {
			text: 'Column2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
		}
	},

	text_with_left_image: {
		text: 'Left Ulla nec est tristique, tempor lacus eu, aliquam erat. Cras tristique, arcu ac tristique hendrerit, urna diam mollis libero, vitae gravida nisi lectus in leo. Aenean eu ligula id nisi euismod dapibus et eu mauris. Donec quis dictum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
		image: {
			src: 'http://placehold.it/160',
			alt_text: 'text with image on left'
		}
	},

	text_with_right_image: {
		text: 'Right Ulla nec est tristique, tempor lacus eu, aliquam erat. Cras tristique, arcu ac tristique hendrerit, urna diam mollis libero, vitae gravida nisi lectus in leo. Aenean eu ligula id nisi euismod dapibus et eu mauris. Donec quis dictum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
		image: {
			src: 'http://placehold.it/160',
			alt_text: 'text with image on right'
		}
	},

	data_table: {
		headers: ['Name', 'Date', 'Location'],
		data: [
			['Event Name', '1-Jan-2014', 'New York, NY'],
			['Another Name', '8-Jul-2014', 'Phoenix, AZ'],
			['A Third Name', '21-Dec-2014', 'Seattle, WA']
		]
	},

	footer: {
		unsubsribe: 'Unsubcribe Instantly',
		webversion: 'web version',
	},
}
