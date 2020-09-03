(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{585:function(e,a,t){"use strict";t.r(a);var s=t(18),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[e._v("#")]),e._v(" docker 常用命令")]),e._v(" "),t("h3",{attrs:{id:"官方文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/container_ls/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language-BASH extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" COMMAND "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ARG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" --help "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" -v "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --version "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("h3",{attrs:{id:"docker-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-build"}},[e._v("#")]),e._v(" docker build")]),e._v(" "),t("p",[t("strong",[e._v("Usage")]),e._v("："),t("code",[e._v("docker build [OPTIONS] PATH | URL | -")])]),e._v(" "),t("p",[t("strong",[e._v("Options")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("--file, -f 指定dockerfile文件\n--tag, -t 镜像命名\n")])])]),t("h3",{attrs:{id:"docker-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-run"}},[e._v("#")]),e._v(" docker run")]),e._v(" "),t("p",[t("strong",[e._v("Usage")]),e._v(": "),t("code",[e._v("docker run [OPTIONS] IMAGE [COMMAND] [ARG...]")])]),e._v(" "),t("p",[t("strong",[e._v("Options")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("--env, -e 指定环境变量\n--env-file 指定环境变量文件\n--expose 暴露指定端口\n--link 链接到其他容器\n--name 指定容器名称\n--detach, -d 后台运行容器并打印容器id\n")])])]),t("h3",{attrs:{id:"docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-image"}},[e._v("#")]),e._v(" docker image")]),e._v(" "),t("p",[t("strong",[e._v("Usage")]),e._v(": "),t("code",[e._v("docker image [COMMAND]")])]),e._v(" "),t("p",[t("strong",[e._v("Child commands")]),e._v(":")]),e._v(" "),t("p",[t("code",[e._v("docker image ls")]),e._v(": 显示镜像列表")]),e._v(" "),t("p",[t("code",[e._v("docker image pull")]),e._v(": 拉取镜像")]),e._v(" "),t("p",[t("code",[e._v("docker image rm")]),e._v(": 删除一个或多个镜像")]),e._v(" "),t("p",[t("code",[e._v("docker image inspect")]),e._v(": 显示镜像详细信息")]),e._v(" "),t("h3",{attrs:{id:"docker-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-images"}},[e._v("#")]),e._v(" docker images")]),e._v(" "),t("p",[t("strong",[e._v("Usage")]),e._v(": "),t("code",[e._v("docker images [OPTIONS] [REPOSITORY] [:TAG]")])]),e._v(" "),t("p",[t("strong",[e._v("Options")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("--all, -a 显示所有镜像（默认隐藏中间镜像）\n")])])]),t("h3",{attrs:{id:"docker-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-container"}},[e._v("#")]),e._v(" docker container")]),e._v(" "),t("p",[t("strong",[e._v("Usage")]),e._v(": "),t("code",[e._v("docker container COMMAND")])]),e._v(" "),t("p",[t("strong",[e._v("Child commands")]),e._v(":")]),e._v(" "),t("p",[t("code",[e._v("docker container ls [ARG...]")]),e._v(": 显示容器列表")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("--all, -a")]),e._v(": 显示所有容器，包括已经停止的容器")])]),e._v(" "),t("p",[t("code",[e._v("docker container exec[OPTIONS] CONTAINER COMMAND [ARG...]")]),e._v(" ：对指定正在运行的容器执行命令")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("--env, -e")]),e._v(": 设置环境变量")]),e._v(" "),t("p",[t("code",[e._v("--interactive, -i")]),e._v(":  以交互模式运行容器")]),e._v(" "),t("p",[t("code",[e._v("--detach, -d")]),e._v(": 后台运行")]),e._v(" "),t("p",[t("code",[e._v("--tty, -t")]),e._v(": 为容器分配一个伪终端")])])])}),[],!1,null,null,null);a.default=r.exports}}]);