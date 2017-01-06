# email-templates

> Create responsive emails that look decent...even in Outlook!


## Getting started

To get running, you'll need to have the following installed:

* [Node.js & npm](https://nodejs.org)
* [Gulp](http://gulpjs.com/)

Once you have those, just run:

```bash
npm install
npm start
```


## Creating a new email

The files you'll likely edit are:

* **`src/index.hbs`** : for the layout of the email
* **`src/style.css`** : for all your email-specific styles
* **`src/variables.js`** : for the title, colors, and typography

In `index.hbs`, several pre-made sections are included.  Basically, you'll copy-paste the sections you need and delete what you don't need.  Then, throw in your copy/images.  If you think of some other useful section, throw it it!

The base styles (e.g. typography and base font colors) can likely be set in `variables.js`. The content for pre-made sections is also stored here.

Finally, whatever other styles you need can be set in style.css.  Note: because a CSS inlining process is being used, you can use several CSS3 selectors (e.g. :nth-of-type) to match certain elements. Because it's being inlined, you don't have to worry about client support _for selectors_.

Piece of 🍰!

### Quick Example:

index.hbs

```hbs
{{> start }}
{{> header }}
{{> end }}
```

variables.js

```javascript
module.exports = {
  title: 'Title goes here',
  /* other stuff */
  header: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: {
      src: 'http://placehold.it/160x80',
      alt_text: 'header image',
    },
    date: 'December 2, 2015'
  },
  /* more stuff */
}
```

will output an `input.html` with just header section, with the text, image and date as defined above.

*Note: If a pre-made section is added to the `index.hbs` without a corresponding setting in `variables.js`, it will not be rendered.*

See [docs](docs/templates.md) for more details.

## Good Resources

  * [How to Write HTML Emails](https://github.com/blakek/how-to-write-html-emails)
  * [CSS support in email clients](https://www.campaignmonitor.com/css/)
  * [Layout and Purpose](http://templates.mailchimp.com/design/layout-and-purpose/)
  * [Email Typography](http://templates.mailchimp.com/design/typography/)
