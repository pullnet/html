function include(rootDir) {
    $.ajax({
        url: rootDir, // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: "html",
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        },
    });
}

// https://qiita.com/hiroyukiwk/items/f2a74ba1406de9fad6f6
