(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{417:function(t,s,e){t.exports=e.p+"assets/img/tokens1.dfd285b0.png"},418:function(t,s,e){t.exports=e.p+"assets/img/tokens2.ad8a0c88.png"},419:function(t,s,e){t.exports=e.p+"assets/img/tokens3.09032568.png"},420:function(t,s,e){t.exports=e.p+"assets/img/tokens4.2dbb6491.png"},623:function(t,s,e){"use strict";e.r(s);var a=e(44),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"personal-access-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#personal-access-tokens"}},[t._v("#")]),t._v(" Personal Access Tokens")]),t._v(" "),a("p",[t._v("Personal Access Tokens can be used to access the Speckle API. They function like ordinary OAuth access tokens, and they enable a script, an app, or any other piece of code to "),a("strong",[t._v("act on your behalf")]),t._v(".")]),t._v(" "),a("p",[t._v("This means that with a token, an app or script is able to:")]),t._v(" "),a("ul",[a("li",[t._v("read any streams you have access to")]),t._v(" "),a("li",[t._v("create streams on your behalf")]),t._v(" "),a("li",[t._v("share those streams with other users")]),t._v(" "),a("li",[t._v("create commits against a stream you have write access to")]),t._v(" "),a("li",[t._v("read the profile (public information) of other users.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Security advisory")]),t._v(" "),a("p",[t._v("Treat any personal access tokens like a password: do not post them anywhere where they could be accessed by others (e.g., public repos).")])]),t._v(" "),a("h2",{attrs:{id:"creating-a-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-token"}},[t._v("#")]),t._v(" Creating a Token")]),t._v(" "),a("p",[t._v('First, you need to login and go to your profile (/profile). Just under "Your Apps" section, you will see a list of all the personal access tokens that you have created so far, and you\'ll be able to create a new one.')]),t._v(" "),a("p",[a("img",{attrs:{src:e(417),alt:""}})]),t._v(" "),a("p",[t._v("To create a new token, click on the new token button. A dialog will appear that will ask you for some basic details about it.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(418),alt:""}})]),t._v(" "),a("p",[t._v("The token name should be something that you can remember. The token scopes define what actions can be taken with that specific token.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Token Scopes")]),t._v(" "),a("p",[t._v("It's good practice to limit the scopes to minimum required ones. For example, if you're creating a script or app that just "),a("strong",[t._v("reads")]),t._v(" from streams, and doesn't need to create new ones, or edit existing ones, just assign it the "),a("code",[t._v("streams:read")]),t._v(" scope.")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(419),alt:""}})]),t._v(" "),a("p",[t._v("Once your token is created, the dialog will display it. This is the first and last time you will be able to see the full token and you should store it somewhere safe now.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(420),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"using-a-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-token"}},[t._v("#")]),t._v(" Using a Token")]),t._v(" "),a("p",[t._v("Once you have a token, you usually will need to pass it as an authorization header in any server bound requests.")]),t._v(" "),a("p",[t._v("For example, here is a simple request to get the total count of your streams using javascript:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/graphql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Authorization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bearer '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- Passing in the token!")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("{ user { id suuid streams { totalCount } } }")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("Note that the token needs to be prefixed with the word "),a("code",[t._v("Bearer")]),t._v("; a full token would look like "),a("code",[t._v("Bearer xxx")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"revoking-a-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revoking-a-token"}},[t._v("#")]),t._v(" Revoking a Token")]),t._v(" "),a("p",[t._v("If you're no longer using a token, or you think it may be compromised (did you commit it by accident to a public github repo?), you can revoke a token. It will be completely disabled and no more actions will be able to be taken with it.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("As soon as possible afterwards, make sure any scripts or apps using that token did not break!")])])])}),[],!1,null,null,null);s.default=n.exports}}]);