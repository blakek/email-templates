# email-templates

> Create responsive emails that work...even in Outlook!


## Getting started

To get running, you'll need to have the following installed:

* [Node.js & npm](https://nodejs.org)
* [Gulp](http://gulpjs.com/)

Once you have those, just run:

```bash
npm install
gulp
```


## Making a new email

The files you'll likely edit are:

* **`template/index.jade`** : for the layout/copy of the email
* **`template/style.css`** : for all your email-specific styles
* **`template/variables.json`** : for the title, colors, and typography

In `index.jade`, there are several pre-made sections.  Basically, you'll
copy-paste the sections you need and delete what you don't need.  Then, throw in
your copy/images.  If you think of some other useful section, throw it it!

The base styles (e.g. typography and base font colors) can likely be set in
`variables.json`.

Finally, whatever other styles you need can be set in style.css.  Note: because
a CSS inlining process is being used, you can use several CSS3 selectors
(e.g. :nth-of-type) to match certain elements (it's being inlined, so you don't
have to worry about client support _for selectors_).

Piece of 🍰!

### Good Resources

* [CSS support in email clients](https://www.campaignmonitor.com/css/)
