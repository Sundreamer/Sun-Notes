// markdown 语法转 html标签（每一个换行代表开始一个新标签）
function markdown (content) {
    var preArr = [], ulArr = [], olArr = [];
    // 在内容的最前面加上一个换行符，方便后面正则匹配
    content = '\n' + content;
    // 先 ``` 符号内的内容存储起来，防止内容中的标记符号会被转换成标签
    var result = content.replace(/\n`{3}([\s|\S]+?)`{3}/g, function (match, k1) {
        preArr.push(k1);
        return '$pre$';
    });
    // 先把 > 符号替换成 blockquote 标签
    result = result.replace(/\n>\s+(.+)/g, function (match, k1) {
        return '<blockquote>' + k1 + '</blockquote>';
    });
    // 替换 # 符号为 h系列标签
    result = result.replace(/\n(#{1,6})\s+(.+)/g, function (match, k1, k2) {
        var name = 'h' + k1.length;
        return '<' + name + '>' + k2 + '</' + name + '>';
    });
    // 替换 ` 符号为 code 符号
    result = result.replace(/`{1,3}(.+?)`{1,3}/g, function (match, k1) {
        return '<code>' + k1 + '</code>';
    });
    // 替换 ** 符号为 strong 符号
    result = result.replace(/\*{2}(.+?)\*{2}/g, function (match, k1) {
        return '<strong>' + k1 + '</strong>';
    });
    // 替换 * 符号为 i 符号
    result = result.replace(/\*(.+?)\*/g, function (match, k1) {
        return '<i>' + k1 + '</i>';
    });
    // 替换 ![描述](example.jpg) 为 img 标签
    result = result.replace(/!\[(.+)\]\((.+?)\)/g, function(match, k1, k2) {
        return '<img src="' + k2 + '" alt= '+ k1 +'>';
    });
    // 替换 [描述](http://example.com) 为 a 标签
    result = result.replace(/\[(.+)\]\((.+?)\)/g, function (match, k1, k2) {
        return '<a href="' + k2 + '">' + k1 + '</a>';
    });
    // 替换 +/-/* 符号为 li 标签（无序列表）
    result = result.replace(/\n[\+|\-|\*]\s+(.+)/g, function (match, k1) {
        return '<li>' + k1 + '</li>';
    });
    // 将无序列表的 li 标签存储起来
    result = result.replace(/(<li>[\s|\S]+?)<\/li>\s+(?!<li>)/g, function (match, k1) {
        ulArr.push(k1);
        return '$ul$';
    });
    // 将 *. 符号替换为 li 标签
    result = result.replace(/\n[0-9]*\.\s+(.+)/g, function (match, k1) {
        return '<li>' + k1 + '</li>';
    });
    // 将有序列表的 li 标签存储起来
    result = result.replace(/(<li>[\s|\S]+?)<\/li>\s+(?!<li>)/g, function (match, k1) {
        olArr.push(k1);
        return '$ol$';
    });
    // 把存储的 ul 的内容填充回去
    result = result.replace(/\$ul\$/g, function () {
        return '<ul>' + ulArr.shift() + '</ul>';
    });
    // 把存储的 ol 的内容填充回去
    result = result.replace(/\$ol\$/g, function () {
        return '<ol>' + olArr.shift() + '</ol>';
    });
    // 把存储的 ``` 内容填充回去
    result = result.replace(/\$pre\$/g, function () {
        return '<pre>' + preArr.shift() + '</pre>';
    });
    return result;
}
// 将没有标签包裹的纯文本用 p 标签包裹起来
function addSection (ele) {
    var nodes = ele.childNodes,
        result = ele.innerHTML;

    for (var i = 0, len = nodes.length; i < len; i++) {
        if (nodes[i].nodeType === 3 && nodes[i].nodeValue !== '\n') {
            var temp = nodes[i].nodeValue,
                trim = temp.replace(/^(\n+)|(\n+)$/g, '');

            // 段落内部的换行转换为 br 标签
            if (trim.indexOf('\n') > -1) {
                temp = temp.replace(trim, trim.replace(/\n+/, '<br/><br/>'));
            }
            // 将开始和结尾的换行符转换为 p 标签
            temp = temp.replace(/^(\n+)?(.+?)(\n+)?$/, function (match, k1, k2, k3) {
                var str = (k1 ? '<p>' : '') + k2 + (k3 ? '</p>' : '');
                return str;
            });
            result = result.replace(nodes[i].nodeValue, temp);
        }
    }
    return result;
}
// 综合转换 - 生成最终的 html 字符串
export default function (content) {
    var htmlStr = markdown(content);
    var box = document.createElement('div');
    box.innerHTML = htmlStr;
    return addSection(box);
}
