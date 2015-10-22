var Url = {
    /**
     * 将URL中的参数解析为对象
     * @param  {String} url 解析的URL字符串
     * @return {Object}     返回结果
     */
    parse: function(url){
        var re = /[\?&]([^\?&=]+)=([^&]+)/g, matcher = null, items = {};

        url = url || window.location.search;

        while (null != (matcher = re.exec(url))) {
          items[matcher[1]] = decodeURIComponent(matcher[2]);
        }

        return items;
    },
    /**
     * 获取URL中指定参数值
     * @param  {String} name 指定参数名
     * @param  {String} url  指定URL，可靠默认为当前URL
     * @return {String}      返回指定参数名值
     */
    get: function(name, url){
        var o = this.parse(url);

        return (o[name]) ? o[name] : '';
    }
};
