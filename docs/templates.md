# Templates

The following templates/pre-made sections/partials are available for use. Each table contains the parameters that can be customized via `variables.js`

*Params with dots denote nested params, e.g.*

`image.src` and `image.alt_text` would be represented in `variables.js` as
```javascript
image: {
  src: '...',
  alt_text: '...'
}
```

## header

A simple header with text, image and date

| param | description | type | example |
| --- | --- | --- | --- |
| text | header text | string | Lorem Ipsum |
| image.src | header image source | link | /images/header_image.png |
| image.alt_text | header image alt text | string | header image |
| date | header date | string | December 2, 2015 |


## image

A main image, spanning across the width of the page

| param | description | type | example |
| --- | --- | --- | --- |
| src | image source | link | /images/main_image.png |
| alt_text | image alt text | string | this is an image |


## image_columns

Two columns with image, text and a button

| param | description | type | example |
| --- | --- | --- | --- |
| column1.text | text in column 1 | string | Lorem Ipsum |
| column1.image.src | column 1 image source | string | /images/col1_image.png |
| column1.image.alt_text | column 1 image alt text | string | col 1 image |
| column1.button.link | column 1 button link | link | http://google.com |
| column1.button.text | column 1 button text | string | A Button! |
| column2.text | text in column 2 | string | Lorem Ipsum |
| column2.image.src | column 2 image source | link | /images/col2_image.png |
| column2.image.alt_text | column 2 image alt text | string | col 2 image |
| column2.button.link | column 2 button link | string | http://google.com |
| column2.button.text | column 2 button text | string | A Button! |


## text_basic

A basic text block

| param | description | type | example |
| --- | --- | --- | --- |
| text | simple text | string | Lorem Ipsum |


## text_button

| param | description | type | example |
| --- | --- | --- | --- |
| text | simple text | string | Lorem Ipsum |
| button.link | button link | link | http://google.com |
| button.text | button text | string | A Button! |


## text_call_to_action

A highlighted text block with a highlighted button

| param | description | type | example |
| --- | --- | --- | --- |
| text | simple text | string | Lorem Ipsum |
| button.link | button link | link | http://google.com |
| button.text | button text | string | We Must Act! |


## text_columns

Two columns with text

| param | description | type | example |
| --- | --- | --- | --- |
| column1.text | text in column 1 | string | Lorem Ipsum |
| column2.text | text in column 2 | string | Lorem Ipsum |


## text_with_left_image

Text block with image on the left

| param | description | type | example |
| --- | --- | --- | --- |
| text | text | string | Lorem Ipsum |
| image.src | image source | link | /images/image.png |
| image.alt_text | image alt text | string | left image |


## text_with_right_image

Text block with image on the right

| param | description | type | example |
| --- | --- | --- | --- |
| text | text | string | Lorem Ipsum |
| image.src | image source | link | /images/image.png |
| image.alt_text | image alt text | string | right image |


## data_table
| param | description | type | example |
| --- | --- | --- | --- |
| headers | items in the table header row |array of strings | ['Name', 'Date', 'Location'] |
| data | rows in the table | array of array of strings | [ ['Event Name', '1-Jan-2014', 'New York, NY'], ['Another Name', '8-Jul-2014', 'Phoenix, AZ'], ['A Third Name', '21-Dec-2014', 'Seattle, WA'] ] |


## footer

A simple footer

| param | description | type | example |
| --- | --- | --- | --- |
| unsubscribe | unsubscribe text | string | Unsubscribe Instantly! |
| webversion | webversion text | string | Desktop Version |
