(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{532:function(s,a,n){"use strict";n.r(a);var t=n(46),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"mongodb高级查询aggregate聚合管道（-lookup关联表操作）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongodb高级查询aggregate聚合管道（-lookup关联表操作）"}},[s._v("#")]),s._v(" MongoDB高级查询aggregate聚合管道（$lookup关联表操作）")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("范例数据")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# order表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.order.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e2f0222fd632a3a40e51"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"trade_no"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"111"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"price"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all_num"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e307222fd632a3a40e52"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"12"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"trade_no"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"121"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"price"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all_num"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e327222fd632a3a40e53"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"15"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"trade_no"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"131"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"price"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all_num"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# order_item表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.order_item.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e37d222fd632a3a40e54"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"手机1"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e383222fd632a3a40e55"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"手机2"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e393222fd632a3a40e56"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"电脑1"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e3b8222fd632a3a40e57"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"显示屏1"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e3bc222fd632a3a40e58"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"显示屏2"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e3bf222fd632a3a40e59"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"显示屏3"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("$lookup（表关联2表关联）")]),s._v(" "),n("blockquote",[n("p",[s._v("基本形式")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("db.collectionName.aggregate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lookup")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          from: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'collectionName1'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# collectionName与collectionName1进行关联")]),s._v("\n          localField: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxx'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# collectionName关联的字段")]),s._v("\n          foreignField: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yyy'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# collectionName1关联的字段")]),s._v("\n          as: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zzz'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关联完成后的数据放在zzz字段中")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("示例：表order和表order_item通过order_id 进行关联")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("db.order.aggregate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lookup")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          from: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'order_item'")]),s._v(",\n          localField: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'order_id'")]),s._v(",\n          foreignField: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'order_id'")]),s._v(",\n          as: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'items'")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e2f0222fd632a3a40e51"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"trade_no"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"111"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"price"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all_num"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"items"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e37d222fd632a3a40e54"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"手机1"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e383222fd632a3a40e55"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"手机2"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e307222fd632a3a40e52"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"12"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"trade_no"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"121"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"price"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all_num"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"items"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e393222fd632a3a40e56"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"电脑1"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e327222fd632a3a40e53"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"15"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"trade_no"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"131"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"price"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all_num"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"items"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e3b8222fd632a3a40e57"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"显示屏1"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e3bc222fd632a3a40e58"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"显示屏2"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5cd8e3bf222fd632a3a40e59"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"显示屏3"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("$lookup (表关联 N表关联)\n表结构：")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/images/mongodb/N表关联.jpg")}}),s._v("\n....")])])])}),[],!1,null,null,null);a.default=e.exports}}]);