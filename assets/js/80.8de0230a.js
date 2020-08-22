(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{522:function(t,s,a){"use strict";a.r(s);var r=a(46),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_10、数据控制语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、数据控制语言"}},[t._v("#")]),t._v(" 10、数据控制语言")]),t._v(" "),a("blockquote",[a("p",[t._v("数据控制语言、用于对mysql的用户及其权限进行管理的语句")])]),t._v(" "),a("h2",{attrs:{id:"_10-1、用户管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1、用户管理"}},[t._v("#")]),t._v(" 10.1、用户管理")]),t._v(" "),a("h3",{attrs:{id:"_10-1-1、用户所在位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-1、用户所在位置"}},[t._v("#")]),t._v(" 10.1.1、用户所在位置")]),t._v(" "),a("blockquote",[a("p",[t._v("Mysql中的所有用户，都存储在系统数据库mysql数据库中user表中，不管哪个数据库的用户，都存储这里。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/mysql/mysql系统用户表.png"),alt:"系统用户表"}}),t._v(" "),a("h3",{attrs:{id:"_10-1-2、创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-2、创建用户"}},[t._v("#")]),t._v(" 10.1.2、创建用户")]),t._v(" "),a("p",[t._v("形式：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名@允许等的地址或者服务器名'")]),t._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 允许登录的地址/服务器名：就是允许该设定的位置，来使用设定的用户名和密码登录，其他位置不行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 可见，mysql的安全身份验证需要3个信息。（用户 + 服务器地址+ 密码）")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user@localhost'")]),t._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user1234'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 时间: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.016")]),t._v("s\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("img",{attrs:{src:t.$withBase("/images/mysql/mysql系统用户表-新增用户.png"),alt:"新增用户后的系统用户表"}}),t._v(" "),a("blockquote",[a("p",[t._v("因为为localhost，因此只有本机用户才能进入数据库。")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someone@47.12.3.123'")]),t._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user1234'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，47.12.3.123 ip的用户登录该数据库时就是可以这样来：mysql -h 112.123.21.21（假装是数据库所在的ip） -u someone -p 密码  就可以安全登录了。")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_10-1-3、删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-3、删除用户"}},[t._v("#")]),t._v(" 10.1.3、删除用户")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名@允许登录的地址或者服务器名'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_10-1-4、修改用户密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-4、修改用户密码"}},[t._v("#")]),t._v(" 10.1.4、修改用户密码")]),t._v(" "),a("ol",[a("li",[t._v("修改自己的密码")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("修改别人的密码")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户@允许登录的地址或者服务器名'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"_10-2、权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2、权限管理"}},[t._v("#")]),t._v(" 10.2、权限管理")]),t._v(" "),a("h3",{attrs:{id:"_10-2-1、mysql中的权限是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-1、mysql中的权限是什么？"}},[t._v("#")]),t._v(" 10.2.1、mysql中的权限是什么？")]),t._v(" "),a("p",[t._v("mysql 数据库，将所有能做的所有事情都分门别类分配到大约30多个权限中去了，其中每个权限，都是一个‘单词’而已，如：")]),t._v(" "),a("ul",[a("li",[t._v("ALL - 代表所有权限")]),t._v(" "),a("li",[t._v("SELECT - 可以查询数据")]),t._v(" "),a("li",[t._v("DELETE - 可以删除数据")])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/images/mysql/mysql权限列表.png"),alt:"权限列表"}}),t._v("、")]),t._v(" "),a("p",[t._v("对应中文\n"),a("table",[a("tbody",[a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("权限   ")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[a("strong",[t._v("意义")])])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("ALL ")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("[PRIVILEGES] 设置除GRANT OPTION之外的所有简单权限")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("ALTER ")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用ALTER TABLE")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("ALTER ROUTINE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("更改或取消已存储的子程序")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("CREATE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用CREATE TABLE")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("CREATE ROUTINE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("创建已存储的子程序")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("CREATE TEMPORARY TABLES")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用CREATE TEMPORARY TABLE")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("CREATE USER")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用CREATE USER,DROP USER, RENAME USER和REVOKE ALL PRIVILEGES")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("CREATE VIEW")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用CREATE VIEW")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("DELETE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用DELETE")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("DROP")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("许使用DROP TABLE")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("EXECUTE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许用户运行已存储的子程序")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("FILE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用SELECT... INTO OUTFILE和LOAD DATA INFILE")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("INDEX")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用CREATE INDEX和DROP INDEX")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("INSERT")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用INSERT")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("LOCK TABLES")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许对您拥有SELECT权限的表使用LOCE TABLES")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("PROCESS")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用SHOW FULL PROCESSLIST")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("REFERENCES")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("未被实施")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("RELOAD")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用FLUSH")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("REPLICATION")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许用户询问从属服务器或主服务器的地址")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("CLIENT")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("REPLICATION SLAVE用于夏制型从属服务器(从主服务器中读取二进制日志事件)")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("SELECT")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("许使用SELECT")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("SHOW DATABASES")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("SHOW DATABASES显示所有数据库")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("SHOW VIEW")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用SHOW CREATE VIEW")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("SHUTDOWN")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用mysqladmin shutdown")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("SUPER")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用CHANGE MASTER, KILL, PURGE MASTER LOGS和SET GLOBAL语句，mysqladmin debug命令; 允许您连攘(一次)，即使已达到max_ctions。")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("UPDATE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许使用UPDATE")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("USAGE")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("“无权限”的网义词")])])]),t._v(" "),a("tr",[a("td",{attrs:{width:"151"}},[a("p",[a("strong",[t._v("GRANT OPTION")])])]),t._v(" "),a("td",{attrs:{width:"888"}},[a("p",[t._v("允许授予权限")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_10-2-2、授予权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-2、授予权限"}},[t._v("#")]),t._v(" 10.2.2、授予权限")]),t._v(" "),a("p",[t._v("形式：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" 权限列表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" 某库"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("某个对象"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名@允许登录的位置'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" 密码"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1. 权限列表： 就是多个权限的名称，相互之间使用逗号‘，’隔开，如：select，insert，update等，也可以直接写all")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2. 某库.某个对象：便是给定的某个数据库中的某个 下级单位赋权；下级单位有：表名、视图名、存储过程名、存储函数名，其中有2个特殊的语法：")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# *.* ：代表所有数据库中的所有下级单位；")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 某库.*：代表指定数据库下的所有下级单位。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3. [identified by 密码]：是可省部分，如果不省略，就表示赋权的同时，也去修改它的密码，但如果该用户不存在（就是to 后面的用户不存在），此时就是创建一个新用户，并此时就必须设置其密码了。")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"_10-2-3、剥夺权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-3、剥夺权限"}},[t._v("#")]),t._v(" 10.2.3、剥夺权限")]),t._v(" "),a("p",[t._v("形式：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("revoke")]),t._v(" 权限列表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" 某库"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("某个对象 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名@允许登录的位置'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 含义：其含义跟grant中完全一样")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);