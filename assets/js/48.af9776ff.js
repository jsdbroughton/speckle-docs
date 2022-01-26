(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{613:function(e,t,a){"use strict";a.r(t);var n=a(44),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[e._v("#")]),e._v(" QuickStart")]),e._v(" "),a("p",[e._v("In a rush? Don't feel like reading through a lot of documentation? This guide will get you up and running with a local dev server and have you sending data to Speckle ASAP. Feel free to dip into the "),a("RouterLink",{attrs:{to:"/user/"}},[e._v("User Guide")]),e._v(" or "),a("RouterLink",{attrs:{to:"/dev/speckle-sharp/"}},[e._v("Dev Docs")]),e._v(" for more detailed explanations where you need them.")],1),e._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),a("p",[e._v("Before you can spin up a local dev server, you'll need to install the following:")]),e._v(" "),a("ul",[a("li",[e._v("Node")]),e._v(" "),a("li",[e._v("Postgres")]),e._v(" "),a("li",[e._v("Redis")]),e._v(" "),a("li",[e._v("Lerna")])]),e._v(" "),a("h2",{attrs:{id:"manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manager"}},[e._v("#")]),e._v(" Manager")]),e._v(" "),a("p",[e._v("Speckle Manager is our desktop application for managing local accounts and connectors. You will need to install it before you can use the Speckle Connectors. Get the latest version "),a("a",{attrs:{href:"https://speckle-releases.netlify.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v('The Manager allows you to add and remove Speckle accounts to your local environment. Simply head to the "Accounts" page to add your first account. You\'ll need to enter a server URL (which can just be '),a("code",[e._v("http://localhost:3000")]),e._v(") then follow the instructions to log in/register and authorise the Manager. From Manager, you'll also be able to set a Default Account which is the account any Desktop Connectors will use if you don't specify an account.")]),e._v(" "),a("p",[e._v('The Manager also has a "Connectors" page where you can view, install, update, and uninstall our official Desktop Connectors.')]),e._v(" "),a("h2",{attrs:{id:"web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[e._v("#")]),e._v(" Web")]),e._v(" "),a("p",[a("a",{attrs:{href:"/dev/web"}},[e._v("Speckle Web")]),e._v(" is a monorepo containing the three web components of Speckle: the Server, the Frontend, and the Viewer. To get started, clone the repo from "),a("a",{attrs:{href:"https://github.com/specklesystems/speckle-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"setting-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up"}},[e._v("#")]),e._v(" Setting Up")]),e._v(" "),a("p",[e._v("There are a few setup steps to go through after a fresh clone.")]),e._v(" "),a("ol",[a("li",[e._v("Build the Viewer")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" packages/viewer\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Bootstrap to the Viewer with the Frontend and install packages")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" packages/frontend\nlerna bootstrap\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Create a Postgres db called "),a("code",[e._v("speckle2_dev")])])]),e._v(" "),a("li",[a("p",[e._v("Copy and fill in an "),a("code",[e._v(".env")]),e._v(" file in "),a("code",[e._v("packages/server")]),e._v(" based on the "),a("code",[e._v(".env-example")])])])]),e._v(" "),a("h3",{attrs:{id:"starting-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-up"}},[e._v("#")]),e._v(" Starting Up")]),e._v(" "),a("p",[e._v("Once you've gone through the initial setup, you're just three steps away from spinning up your dev server and exploring the frontend.")]),e._v(" "),a("ol",[a("li",[e._v("Start local instances of both Postgres and Redis")]),e._v(" "),a("li",[e._v("In "),a("code",[e._v("packages/server")]),e._v(", run "),a("code",[e._v("npm run dev")])]),e._v(" "),a("li",[e._v("In "),a("code",[e._v("packages/frontend")]),e._v(", run "),a("code",[e._v("npm run dev")])])]),e._v(" "),a("p",[e._v("Tada ✨ You should now see the frontend at "),a("code",[e._v("localhost:3000")]),e._v("! You can explore the API using the GraphQL Playground at "),a("code",[e._v("localhost:3000/graphql")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"desktop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desktop"}},[e._v("#")]),e._v(" Desktop")]),e._v(" "),a("h3",{attrs:{id:"speckle-sharp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speckle-sharp"}},[e._v("#")]),e._v(" Speckle Sharp")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/dev/speckle-sharp/"}},[e._v("Speckle Sharp")]),e._v(" is the home of all thing Speckle C# including the .NET SDK and the Desktop Connectors. The Connectors use our default interoperability kit "),a("a",{attrs:{href:"/dev/speckle-sharp/objects"}},[e._v("Objects")]),e._v(": a .NET object model containing geometry and AEC element base classes. It works great out of the box, but can be forked and extended by you if you need extended capabilities.")],1),e._v(" "),a("p",[e._v("The repo also contains the "),a("a",{attrs:{href:"https://github.com/specklesystems/speckle-sharp/tree/master/DesktopUI",target:"_blank",rel:"noopener noreferrer"}},[e._v("DesktopUI"),a("OutboundLink")],1),e._v(": a WPF application which you can implement to build your own Connectors!")]),e._v(" "),a("h3",{attrs:{id:"connectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[e._v("#")]),e._v(" Connectors")]),e._v(" "),a("p",[e._v("Currently, we have four Connectors within Speckle Sharp: Dynamo, Grasshopper, Revit, and Rhino. The Connectors are what free your data from their source applications and allow you to access them from wherever you need them. They provide simple and intuitive user interfaces for selecting, sending, and receiving data to and from your Server.")]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("You can install release builds of the Connectors from the "),a("a",{attrs:{href:"#manager"}},[e._v("Speckle Manager")]),e._v(" or you can debug them locally by cloning "),a("a",{attrs:{href:"https://github.com/specklesystems/speckle-sharp",target:"_blank",rel:"noopener noreferrer"}},[e._v("the repo"),a("OutboundLink")],1),e._v(". Instructions for building and debugging each of the Connectors can be found in the "),a("a",{attrs:{href:"/dev/speckle-sharp/connectors"}},[e._v("Dev Docs")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("That's all, folks! Your lighting fast introduction to Speckle is now complete. There's plenty more to see in the Dev Docs, so have a browse if you want more information. If you have any questions, feedback, or ideas, join us on "),a("a",{attrs:{href:"https://speckle.community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the forum"),a("OutboundLink")],1),e._v(" and start a discussion!")])])}),[],!1,null,null,null);t.default=s.exports}}]);