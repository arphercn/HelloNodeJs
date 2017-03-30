配置sumbime  
Text https://my.oschina.net/ximidao/blog/413101   运行ctrl+B  
HelloNode  
http://www.nodebeginner.org/index-zh-cn.html  

常用 npm 命令

（以下xxx均为模块名）

	npm install xxx（本地安装模块，安装在命令行当前目录下的 node_modules 文件夹下。）
	npm install -g xxx（参数 -g 为全局安装模块。）
	npm config get prefix（获取全局安装时的安装目录，win10 默认目录是 C:\Users\username\AppData\Roaming\npm）（username 为系统当前用户名。）
	npm config set prefix “目录路径”（设置全局安装模块时的安装目录。）
	
	npm install经常失败解决办法[http://blog.csdn.net/h416756139/article/details/50812109]
	1.通过定制的 cnpm 命令行工具代替默认的 npm
	npm install -g cnpm --registry=http://registry.npm.taobao.org
	2.安装具体模块
	cnpm install [name]
	tips:当安装的时候发现安装的模块还没有同步过来, 淘宝 NPM 会自动在后台进行同步, 并且会让你从官方 NPM registry.npmjs.org 进行安装. 下次你再安装这个模块的时候, 就会直接从 淘宝 NPM 安装了.
	3.同步模块（直接通过 sync 命令马上同步一个模块）
	cnpm sync connect