(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{622:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webhooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhooks"}},[t._v("#")]),t._v(" Webhooks")]),t._v(" "),s("p",[t._v("Webhooks allow you to subscribe to a stream's events and get notified of them in real time. You can then use this to trigger ci apps, automation workflows, and more! The world is your oyster. Let's have a quick look at how to work with them.")]),t._v(" "),s("h2",{attrs:{id:"setting-up-a-stream-webhook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-stream-webhook"}},[t._v("#")]),t._v(" Setting Up A Stream Webhook")]),t._v(" "),s("p",[t._v('On the sidebar of a stream,  you\'ll find a "⚙ Settings" button. Click this and head to the "Webhooks" tab to add webhooks to your stream.')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/7717434/126977638-67d2958c-12d2-40b2-aef3-da5a01451773.gif",alt:""}})]),t._v(" "),s("p",[t._v("There are a few different fields to fill out when setting up a webhook:")]),t._v(" "),s("ul",[s("li",[t._v("URL: The URL that will be sent "),s("code",[t._v("POST")]),t._v(" requests when your webhook is triggered")]),t._v(" "),s("li",[t._v("Description: Optional identifying text (will be shown when viewing all your webhooks in a list)")]),t._v(" "),s("li",[t._v("Secret: An optional token that will help you verity that requests you receive are actually coming from the Speckle Server. Requests will be secured with an "),s("code",[t._v("X-WEBHOOK-SIGNATURE")]),t._v(" which you can verify upon receiving.")]),t._v(" "),s("li",[t._v("Triggers: The events you want to trigger the webhook")]),t._v(" "),s("li",[t._v("Enabled: Toggle the webhook on and off")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/7717434/126979041-ac01d1f7-e9d3-455c-ab4f-7154ab891a96.png",alt:""}})]),t._v(" "),s("p",[t._v('Go back to the main "Webhooks" tab to view all the webhooks on the stream. Click on a webhook to open the edit menu. The symbol to the left to the description indicates the status of the last webhook request; hover over it to get more information. Here, the green ✔ indicates the last request was successfully sent. The grey circle with an ❕ indicates no requests have been sent yet (you\'ve likely just created the webhook and none of the triggers have happened yet). If the last request failed, you will see a red ❌ which you can hover over to see the error message.')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/7717434/126981792-d1a66613-43d9-4992-a8e2-fe692b68198e.png",alt:""}})]),t._v(" "),s("p",[t._v("You can of course also manage webhooks via the "),s("a",{attrs:{href:"/dev/server-graphql-api"}},[t._v("GraphQL API")]),t._v(" using the "),s("code",[t._v("webhookCreate")]),t._v(", "),s("code",[t._v("webhookUpdate")]),t._v(", and "),s("code",[t._v("webhookDelete")]),t._v(" mutations. There is a "),s("code",[t._v("webhooks")]),t._v(" field on the "),s("code",[t._v("stream")]),t._v(" schema which you can query to get the webhooks for a stream and the "),s("code",[t._v("history")]),t._v(" of previous requests.")]),t._v(" "),s("h2",{attrs:{id:"the-webhook-payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-webhook-payload"}},[t._v("#")]),t._v(" The Webhook Payload")]),t._v(" "),s("p",[t._v("Here is an example of what a webhook payload looks like. The structure will always be the same, except for the "),s("code",[t._v('["event"]["data"]')]),t._v(" which will change depending on the event that triggered the request.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48364aff6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234abcdef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"activityMessage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Stream metadata changed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"event"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"event_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stream_update"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"old"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48364aff6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Golden Nugget \\ud83c\\udf3b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"revit model"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isPublic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clonedFrom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-06-29T09:09:02.993Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-07-23T14:17:18.660Z"')]),t._v("  \n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48364aff6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Golden Nugget \\ud83c\\udf3b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n              "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(' "revit model for cool and \ngood times \\ud83c\\udf1e"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isPublic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"server"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stream"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webhook"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("p",[t._v("There are a few key fields that will always be present in the payload including:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("streamId")]),t._v(": the id of the stream the webhook was added to")]),t._v(" "),s("li",[s("code",[t._v("userId")]),t._v(": the id of the user who triggered the event")]),t._v(" "),s("li",[s("code",[t._v("activityMessage")]),t._v(": a human readable summary about what event has occurred")]),t._v(" "),s("li",[s("code",[t._v("event")]),t._v(": the event that triggered the message; it will always include the "),s("code",[t._v("event_name")]),t._v(" and "),s("code",[t._v("data")]),t._v(", though the structure of the event "),s("code",[t._v("data")]),t._v(" will vary depending on the event type")]),t._v(" "),s("li",[s("code",[t._v("server")]),t._v(": details about the server that sent the message including its "),s("code",[t._v("name")]),t._v(", "),s("code",[t._v("description")]),t._v(", and "),s("code",[t._v("canonicalUrl")])]),t._v(" "),s("li",[s("code",[t._v("stream")]),t._v(": details about the stream the event was triggered from")]),t._v(" "),s("li",[s("code",[t._v("user")]),t._v(": details about the user who caused the event")]),t._v(" "),s("li",[s("code",[t._v("webhook")]),t._v(": details about the webhook itself")])])])}),[],!1,null,null,null);e.default=n.exports}}]);