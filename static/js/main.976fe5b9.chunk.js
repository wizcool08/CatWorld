(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(14),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),m=(n(15),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set4&size=150x200"),alt:"kittens"}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))}),d=(n(16),function(e){var t=e.cats;return r.a.createElement("div",{className:"card-list"},t.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})}))}),f=(n(17),function(e){var t=e.handleSearchChange,n=e.placeholder;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"text",placeholder:n,onChange:function(e){t(e.target.value)}}))}),p=(n(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleSearchChange=function(t){e.setState({searchTerm:t})},e.state={cats:[],searchTerm:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({cats:t})})}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchTerm,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"CatWorld"),r.a.createElement(f,{handleSearchChange:this.handleSearchChange,placeholder:"Search Cats.."}),r.a.createElement(d,{cats:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.976fe5b9.chunk.js.map