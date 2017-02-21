##针对特定元素的扩展

对如下的HTML结构：

	<!-- HTML结构 -->
	<div id="test-external">
	    <p>如何学习<a href="http://jquery.com">jQuery</a>？</p>
	    <p>首先，你要学习<a href="/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000">JavaScript</a>，并了解基本的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>。</p>
	</div>
要给所有指向外链的超链接加上跳转提示

	$.fn.external = function () {
	    // return返回的each()返回结果，支持链式调用:
	    return this.filter('a').each(function () {
	        // 注意: each()内部的回调函数的this绑定为DOM本身!
	        var a = $(this);
	        var url = a.attr('href');
	        if (url && (url.indexOf('http://')===0 || url.indexOf('https://')===0)) {
	            a.attr('href', '#0')
	             .removeAttr('target')
	             .append(' <i class="uk-icon-external-link"></i>')
	             .click(function () {
	                if(confirm('你确定要前往' + url + '？')) {
	                    window.open(url);
	                }
	            });
	        }
	    });
	}
	
	$('#test-external a').external();