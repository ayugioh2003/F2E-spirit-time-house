# admin-order 筆記

## 自己筆記

### 環境建構
gulp, ejs, bs4, scss

### navbar

BS4 navbar
* [Navbar · Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/)

切換頁面時，在 navbar 的連結添加 .active
`<% if (current === 'index') {%>active<%} `

### index 選擇欄
icon
* [Material Icons Guide - Google Design](https://google.github.io/material-design-icons/)
* [Icons - Material Design](https://material.io/tools/icons/?style=baseline)
* [Font Awesome](https://fontawesome.com/)

vertical align
* [Vertical alignment · Bootstrap](https://getbootstrap.com/docs/4.0/utilities/vertical-align/)

在 BS variable 新增 text-color 顏色
$theme-colors: map-merge

gutter 緊湊 form-row
* [Forms · Bootstrap](https://getbootstrap.com/docs/4.0/components/forms/#form-row)

### Chart

chart.js
* [Installation · Chart.js documentation](https://www.chartjs.org/docs/latest/getting-started/installation.html)
* [入門說明](https://www.chartjs.org/docs/latest/getting-started/usage.html)
* [Line 的設定](https://www.chartjs.org/docs/latest/charts/line.html)
* [Line Chart 範例](https://www.chartjs.org/samples/latest/charts/line/basic.html)
* update
  * [Updating Charts · Chart.js documentation](https://www.chartjs.org/docs/latest/developers/updates.html)


position
* [Position · Bootstrap](https://getbootstrap.com/docs/4.0/utilities/position/)
* [HTML <col> 標簽](http://www.w3school.com.cn/tags/tag_col.asp)

### hover 選單
position 

### table
table-responsive
table colspan 合併欄位空間
* [使用 colgroup 和 col 實現響應式表格 | Aitter's Blog](http://coderlt.coding.me/2017/11/20/table-colgroup/)
* [HTML col colgroup 有何不同？如何文字靠右？](https://ithelp.ithome.com.tw/questions/10092066)
* [<col> - HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)
* [精通HTML表格的使用 - 阮一峰的網絡日志](http://www.ruanyifeng.com/blog/2009/05/html_table_mastering.html)
* [table 測試](https://codepen.io/ayugioh2003/pen/KLbXrW?editors=1000)


### table 篩選
篩選 抓取目前 tr 是第幾筆資料
* [javascript 怎麽獲取是第幾個元素 - SegmentFault 思否](https://segmentfault.com/q/1010000015555727)
`var index = [].indexOf.call(tr.parentElement.children, tr)`

切換 classNAme
* [How To Toggle Between Class Names](https://www.w3schools.com/howto/howto_js_toggle_class.asp)
`element.classList.toggle("mystyle");`

抓父層元素
* [Node.parentElement - Web API 接口參考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentElement)
* [Node.parentNode - Web API 接口參考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentNode)
* [parentNode 和 parentElement 區别 - zhishaofei3 - 博客園](https://www.cnblogs.com/zhishaofei/p/4091865.html)
* [why not parentElement instead of parentNode? | Treehouse Community](https://webcache.googleusercontent.com/search?q=cache:jaJW6UOr8gIJ:https://teamtreehouse.com/community/why-not-parentelement-instead-of-parentnode+&cd=5&hl=zh-TW&ct=clnk&gl=tw)
* [javascript - Getting the parent div of element - Stack Overflow](https://stackoverflow.com/questions/6856871/getting-the-parent-div-of-element)
* [javascript - Difference between DOM parentNode and parentElement - Stack Overflow](https://stackoverflow.com/questions/8685739/difference-between-dom-parentnode-and-parentelement)
* [parentElement 和 parentNode 的區别 - software_developer 的專欄 - CSDN 博客](https://blog.csdn.net/software_developer/article/details/3862565)
* [Js 中 parentNode,parentElement,childNodes,children 之間的區別 Script - IT 閱讀](https://www.itread01.com/p/1088470.html)
* [parentNode,parentElement 區别 - 程序園](http://www.voidcn.com/article/p-gasrrkzi-bpb.html)



### Modal
隱藏 modal
`$('#myModal').modal('hide')`
* [Modal · Bootstrap](https://getbootstrap.com/docs/4.0/components/modal/)
* [【Bootstrap3】#10 modal 提供資訊給使用者 & 對話框 & 填表單視窗 - YouTube](https://www.youtube.com/watch?v=YoSr3KivlYc)



## 直播主切版

相關連結
* [題目公告](https://www.facebook.com/groups/173311386703334/learning_content/?filter=377909922704174&post=184948512206288)
* [設計稿](https://hexschool.github.io/THE_F2E_Design/week3-admin%20order/?)
* 直播
  * [直播一 來囉！久違的直播！切個訂單管理系統](https://www.facebook.com/LiveCoding.tw/videos/1842387249396133/)
  * [直播二 來囉！訂單管理系統 Part2](https://www.facebook.com/LiveCoding.tw/videos/1843350785966446/)
  * [[直播] 切個訂單管理系統 Part1 - YouTube](https://www.youtube.com/watch?v=1mytoUV38Lk)
  * [[直播] 切個訂單管理系統 Part2 - YouTube](https://www.youtube.com/watch?v=Mdfa4_PMxlY)
* [comdan66/hexschool-week3: 六角學院 The F2E - 前端修練精神時光屋，週三挑戰賽！](https://github.com/comdan66/hexschool-week3)
* [Home - 訂單管理](https://works.ioa.tw/hexschool-week3/index.html)

環境
gulp, compass(SCSS)

選顏色、HTML 結構

icon
* 自己準備的 icon

chart
* google chart

第二個 item 之後加上底線

```scss
.item {
  +.item {
    border-top: 1px solid rgba(235, 235, 235, 1);
  }
}
```

hover 選單
絕對定位、z-index
```scss
.unit
  &:hover {
    .list {
      display: inline-block;
    }
  }
  .list {
    position: absolute;
    overflow: hidden;
  }
}
```

tooltip
* 手刻
  * 在每個 span 再添加 tip，實戰中不推薦
  * tip 的箭頭，寬高10，轉45度
* 工具

-

js 新增商品清單