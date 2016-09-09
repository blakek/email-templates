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

* **`template/index.hbs`** : for the layout/copy of the email
* **`template/style.css`** : for all your email-specific styles
* **`template/variables.js`** : for the title, colors, and typography

In `index.hbs`, there are several pre-made sections.  Basically, you'll
copy-paste the sections you need and delete what you don't need.  Then, throw in
your copy/images.  If you think of some other useful section, throw it it!

The base styles (e.g. typography and base font colors) can likely be set in
`variables.js`.

Finally, whatever other styles you need can be set in style.css.  Note: because
a CSS inlining process is being used, you can use several CSS3 selectors
(e.g. :nth-of-type) to match certain elements. Because it's being inlined, you don't
have to worry about client support _for selectors_.

Piece of 🍰!


## Good Resources

  * [How to Write HTML Emails](https://github.com/blakek/how-to-write-html-emails)
  * [CSS support in email clients](https://www.campaignmonitor.com/css/)
  * [Layout and Purpose](http://templates.mailchimp.com/design/layout-and-purpose/)
  * [Email Typography](http://templates.mailchimp.com/design/typography/)
