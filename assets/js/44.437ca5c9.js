(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{608:function(t,e,a){"use strict";a.r(e);var s=a(44),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kits"}},[t._v("#")]),t._v(" Kits")]),t._v(" "),a("p",[t._v("Kits were originally discussed on the community forum. Check out "),a("a",{attrs:{href:"https://speckle.community/t/introducing-kits-2-0/710",target:"_blank",rel:"noopener noreferrer"}},[t._v("the original thread"),a("OutboundLink")],1),t._v("!")]),t._v(" "),a("h2",{attrs:{id:"preamble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preamble"}},[t._v("#")]),t._v(" Preamble")]),t._v(" "),a("p",[t._v("This page covers what Kits are and do and the basic concepts behind them. "),a("a",{attrs:{href:"/dev/kits-dev"}},[t._v("Here can read how to write your own kit")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Currently Kits are only supported by our .NET SDK")])]),t._v(" "),a("h2",{attrs:{id:"what-are-kits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-kits"}},[t._v("#")]),t._v(" What Are Kits?")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://speckle.community/uploads/default/optimized/1X/f7ce9276c37b105133e7eccf0e376ae3093a991d_2_690x195.png",alt:""}})]),t._v(" "),a("p",[t._v("Kits are at the heart of how Speckle "),a("em",[t._v("manages")]),t._v(" interoperability. They are, in a nutshell, a package consisting of:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("an object model")]),t._v(" that defines the structure of the data")]),t._v(" "),a("li",[a("strong",[t._v("a set of converters")]),t._v(", implementations for various AEC authoring applications (ie, conversion routines that make the translations happen)")])]),t._v(" "),a("p",[t._v('Whenever a connector is "sending to Speckle", it needs to convert data (lines, points, beams, doors, etc.) into this intermediate object model. Upon receiving, the opposite process happens.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT 🙌")]),t._v(" "),a("p",[a("strong",[t._v("Kits are not tied into the core of Speckle, they are pluggable.")]),t._v(" Anyone can add/remove them as they wish or develop their own.")])]),t._v(" "),a("h2",{attrs:{id:"how-kits-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-kits-work"}},[t._v("#")]),t._v(" How Kits work")]),t._v(" "),a("p",[t._v("A Kit is assumed to be able to handle all element types, geometries and disciplines in use by a user/team/company. This is a core difference from previous iterations of Speckle. It multiple kits are available on a user machine, the user (or system administrators) will be responsible of selecting the default kit.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT 🙌")]),t._v(" "),a("p",[t._v("Kit selection is not yet available in most of our connectors. We are planning to add it soon!")])]),t._v(" "),a("p",[t._v("When a connector needs to convert an object, it will only search for available conversion routines in the selected kit and will not automatically fall back on other kits - this might change in the future!")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://speckle.community/uploads/default/optimized/1X/f9890eead0fb8aa7bbe141a6cf7dd16453b0d176_2_690x449.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[t._v("#")]),t._v(" Objects")]),t._v(" "),a("p",[t._v("Objects is the name of our default kit. It ships with any of our connectors and it's the perfect base for any customization and/or extension.\nYou can read more about it in the "),a("a",{attrs:{href:"/dev/objects"}},[t._v("Objects Kit section")]),t._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);