(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{625:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transports"}},[t._v("#")]),t._v(" Transports")]),t._v(" "),s("p",[t._v("This post was originally part of the Making Speckle 2.0 series of posts on the community forum, it's been adapted as part of our dev docs. Check out "),s("a",{attrs:{href:"https://speckle.community/t/core-2-0-transports/919",target:"_blank",rel:"noopener noreferrer"}},[t._v("the original on our forum"),s("OutboundLink")],1),t._v("!")]),t._v(" "),s("h2",{attrs:{id:"preamble"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preamble"}},[t._v("#")]),t._v(" Preamble")]),t._v(" "),s("p",[t._v("This page covers what Transports are and do and the basic concepts behind them. "),s("a",{attrs:{href:"/dev/transports-dev"}},[t._v("Here can read how to write your own transport")]),t._v(". Please note that currently examples are only in C#, equivalent implementations are available in our other SDKs.")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("One of the most common use-cases we've encountered throughout the past 5 years of interacting with developers from the AEC space is \"dumping data somewhere\", and, obviously, getting it back out again. While this can, of course, be done by using the Speckle server, some situations call for a different storage type or database.\nWe've seen people looking to use files on a network drive, Azure SQL provisions, MongoDB, Excel files, and sometimes "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Core_rope_memory",target:"_blank",rel:"noopener noreferrer"}},[t._v("core rope memory"),s("OutboundLink")],1),t._v(" (joking, we've never seen that one - yet!).")]),t._v(" "),s("p",[t._v('An important part of our mission at Speckle is to empower developers across AEC. We want to give you a leg up so you can "automate all the things" and build powerful applications that leverage modern tech.')]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Transports give developers in the AEC space full control over where and how their data is stored.")])]),t._v(" "),s("p",[t._v("You can now switch, choose and mix various storage layers. This allows us to write better, more memory efficient and predictable connectors. It also allows you, as a developer, to use Speckle as a springboard in your development work in a much more flexible way.")]),t._v(" "),s("h2",{attrs:{id:"definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),s("p",[t._v("Before we dive in and see how they work, let's get some definitions out of the way:")]),t._v(" "),s("h3",{attrs:{id:"transports-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transports-2"}},[t._v("#")]),t._v(" Transports")]),t._v(" "),s("p",[t._v("In Speckle, transports take Speckle Objects from memory and persist it to a specific storage layer. Of course, they're also responsible for taking those objects out of the storage layer and back into memory.")]),t._v(" "),s("h3",{attrs:{id:"storage-layers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-layers"}},[t._v("#")]),t._v(" Storage Layers")]),t._v(" "),s("p",[t._v("The storage layer that a transport writes to can be, ultimately, anything you want it to be. The .NET SDK implements already a few of them, specifically:")]),t._v(" "),s("ul",[s("li",[t._v("an SQLite Transport")]),t._v(" "),s("li",[t._v("an In-Memory Transport")]),t._v(" "),s("li",[s("strong",[t._v("a Speckle Server 2.0 Transport")])]),t._v(" "),s("li",[t._v("a Disk Transport")]),t._v(" "),s("li",[t._v("a MongoDB Transport")])]),t._v(" "),s("p",[t._v("Other possible targets for transports can be S3 storage, a network drive, etc. You can also write a transport that writes to more than one place, but we advise against it - the .NET SDK provides a better way to achieve the same thing.")]),t._v(" "),s("p",[t._v("Moreover, in the case of disk based transports (ie, disk, sqlite, etc.) you can also "),s("strong",[t._v("control the location")]),t._v(" of where this data is stored.")]),t._v(" "),s("h2",{attrs:{id:"sending-data-serialisation-and-writing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-data-serialisation-and-writing"}},[t._v("#")]),t._v(" Sending Data: Serialisation and Writing")]),t._v(" "),s("p",[t._v("Serialisation is a potentially quite wasteful operation depending on the size of the data. One of our goals is to be able to support arbitrarily large models without adding too much overhead.")]),t._v(" "),s("blockquote",[s("p",[t._v("Why can serialisation be wasteful, especially in terms of memory usage? Imagine you have a model with 100k building objects (geometry & data) open in an application. To send that model to Speckle, we would need to (1) convert those objects into Speckle objects, using a given converter, then (2) serialise them to whatever format we'd be ingesting down the line (e.g., a JSON string), and, finally, (3) transport them to Speckle. Over the course of these steps, your computer's memory holds "),s("strong",[s("em",[t._v("three")])]),t._v(" representations of the same object - Native, Speckle, and String. Not that cool! To reduce memory overhead, Speckle now integrates serialisation with writing objects to one or more persistence layers via transports. Whenever an object finishes serialisation, it's sent to a transport for storage, and ultimately, its string representation gets \"garbage collected\". Just like this, we've knocked off some memory usage.")])]),t._v(" "),s("p",[t._v("The 2.0 API exposes two lower level methods for sending (serialising and writing) and receiving (reading and deserialising) data. In this section, we'll look at only at the send one - the section below will provide more detail on receiving data.")]),t._v(" "),s("p",[t._v("First off, let's start with the simplest, default, use case:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// First, let's create a simple base object to store our building data in.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@columns"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" the columns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@rooms"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Rooms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" the rooms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Let's now send the data:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myDataId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Operations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("Looks quite simple! In this scenario, the "),s("code",[t._v("Send")]),t._v(" method serialised and saved the "),s("code",[t._v("myData")]),t._v(" object, together with all its detachable "),s("code",[t._v("columns")]),t._v(" and "),s("code",[t._v("rooms")]),t._v(" to the default Speckle local transport (an SQLite db stored in "),s("code",[t._v("~/AppData/Speckle")]),t._v("), and returned the id (hash) of the "),s("code",[t._v("myData")]),t._v(" object, which you can use to receive it back again.")]),t._v(" "),s("p",[t._v("Let's look at a more advanced example:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myRevisionId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Operations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tmyData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("transports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ITransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ServerTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imagine this one server...")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ServerTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... and this is a different one! you're basically pushing to multiple remotes!")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("MyCustomTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... and, why not another transport?")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("What's happening here is that we're passing in multiple transports to the Send method. Speckle will persist the given object, with all its detachable sub-children, to all these transports, and, when done, return the object's id (hash!).")]),t._v(" "),s("h2",{attrs:{id:"receiving-data-reading-and-deserialisation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-reading-and-deserialisation"}},[t._v("#")]),t._v(" Receiving Data: Reading and Deserialisation")]),t._v(" "),s("p",[t._v("Again, let's start with the simplest use-case possible:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// To set the stage, in the previous code sample, we've done:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myDataId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Operations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now, we want to get it back out. It's as simple as:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Operations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Receive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myDataId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v('This just retrieves the object back using the default SQLite Transport. No accounts, no extra HTTP requests, no hassle. Of course, this is enough only for "local" operations that are bound to a single computer only.')]),t._v(" "),s("p",[t._v("If you want this to work across a local network, you can always create a SQLite Transport (or your own custom transport for that matter) that stores data on a network accessible drive. For large collaborative environments, you can, of course, receive your data from a Speckle Server.")]),t._v(" "),s("p",[t._v("While you can Send data to multiple places at the same time, you can't really receive data from more places at the same time. Hence, "),s("code",[t._v("Receive")]),t._v(" can only accept one transport as the source:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Operations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Receive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tmyDataId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("remoteTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ServerTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// where you want to receive things from!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("Done! "),s("code",[t._v("myData")]),t._v(" is now your data - a nicely deserialised Base object.")]),t._v(" "),s("h2",{attrs:{id:"advanced-transports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-transports"}},[t._v("#")]),t._v(" Advanced Transports")]),t._v(" "),s("p",[t._v("The Send and Receive functions in the examples above assume "),s("strong",[t._v("a shared global cache")]),t._v(" located in "),s("code",[t._v("~/User/.config/Speckle")]),t._v(". In the case of Send, this means that objects will be written to a SQLite Transport that is used by Speckle always; in the case of Receive, the same SQLite Transport will be used to buffer to/from the remote transport.")]),t._v(" "),s("p",[t._v("Nevertheless, there are some use cases where you don't want to, or cannot, use the shared global cache. For example, you would want to go full on classic version control, and store your history right next to your project's file:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('`-- MyProject_A            # root folder\n    |-- .speckle           # the ".git" folder\n    |   |-- references.db  # commits, branches, tags, etc. storage\n    |   `-- objects.db     # object storage\n    `-- MyProject_A.rvt    # source file\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("How would you actually implement such a system?")]),t._v(" "),s("p",[t._v("First, you can always customise the location of your transport. For example, in the case of the SQLite Transport, you can specify a folder where to actually create it. Let's assume we want to send our data to only two transports, a local SQLite one that's sitting in the "),s("code",[t._v(".speckle")]),t._v(" folder just next to our Revit file, and a Speckle Server.")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" customLocalTransport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SQLiteTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("basePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"{localFolderPath}/.speckle"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" serverTransport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ServerTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("The "),s("code",[t._v("Send")]),t._v(" method can take an optional "),s("code",[t._v("useDefaultCache: false")]),t._v(" argument to bypass the global cache, and send exclusively to the provided transports:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myDataId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Operations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  myData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("transports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ITransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" customLocalTransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serverTransport "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("useDefaultCache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will bypass the global cache!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("When receiving data, if you want to use your custom local transport, the method would look like this:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Operations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Receive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("objectId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myDataId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("remoteTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" serverTransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("localTransport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" customLocalTransport "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will use this one instead of the global cache!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Another use case is in constrained environments, where you don't have a persistent storage layer handy, such as a serverless function, or docker container. That's where you would probably want to use a "),s("code",[t._v("MemoryTransport")]),t._v(" - it's obviously much faster and it doesn't need to touch the disk.")]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v('Transports give you, as a developer, a lot of flexibility in how you can use Speckle, so hopefully "automating all the things" will become a bit easier and nicer. They make it easy to customise your workflows and where and how you store data - from the Speckle Server, to one or more databases, local or remote.')])])}),[],!1,null,null,null);a.default=n.exports}}]);