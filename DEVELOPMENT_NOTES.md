(the contents of this file will likely end up somewhere else but is a good enough place to capture them for now)

When planning the development of a new component these popular CSS frameworks can provide inspiration, as well as give insight into the features companion addon developers will be needing to implement:

* http://v4-alpha.getbootstrap.com
* http://foundation.zurb.com
* http://materializecss.com
* http://purecss.io
* http://semantic-ui.com
* http://getuikit.com

Another resource that may be of use:

* http://ui-patterns.com/patterns


### Development philosophy

If a component requires a property to be set and the absence of it will only affect the UI then warn of this condition (see https://github.com/softlayer/sl-ember-components/blob/524470359e1b86f35c817f8c9983b4cc74222ff4/addon/components/sl-alert.js#L114 for example)

If a component requires a property to be set and the absence of it will affect the UX or the user's ability to use the application then the throwing of an error is warranted. (see https://github.com/softlayer/sl-ember-components#error-handling)
