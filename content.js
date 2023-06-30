const article = document.querySelector("#svn_keyword_new");
console.log('content脚本');
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
console.log('存在article文章');
//
var div = document.querySelector('#copy_id_new');
var id = div.getAttribute('data-clipboard-text');
console.log(id);

var URL = window.location.href;
//
//const badge = document.createElement("p");
//badge.textContent = "【"+id + "】" +URL ;
//article.insertAdjacentElement("afterend", badge);

var titlediv = document.querySelector('#title-copy-btn-new');
titlediv.setAttribute('data-clipboard-text', "【"+id + "】" +URL );
//
var changeUrl = div.getAttribute('data-clipboard-text');
console.log(changeUrl );

//
titlediv.innerHTML = "复制 ID&链接"

}else{
  console.log('不存在article文章');
}