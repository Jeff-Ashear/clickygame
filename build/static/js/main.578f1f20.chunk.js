(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/one.62ac600b.png"},function(e,t,a){e.exports=a.p+"static/media/two.dd8c8823.jpg"},function(e,t,a){e.exports=a.p+"static/media/three.5598e900.jpg"},function(e,t,a){e.exports=a.p+"static/media/four.618059c5.jpg"},function(e,t,a){e.exports=a.p+"static/media/five.a26ff157.jpg"},function(e,t,a){e.exports=a.p+"static/media/six.2c9a327a.jpg"},function(e,t,a){e.exports=a.p+"static/media/seven.e7fb3046.jpg"},function(e,t,a){e.exports=a.p+"static/media/eight.b4dad123.jpg"},function(e,t,a){e.exports=a.p+"static/media/nine.7a6b1d4f.jpg"},function(e,t,a){e.exports=a.p+"static/media/ten.4389958e.jpg"},function(e,t,a){e.exports=a.p+"static/media/eleven.ad93c3ff.jpg"},function(e,t,a){e.exports=a.p+"static/media/twelve.41736665.jpg"},,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),o=a.n(i),s=(a(25),a(1)),r=a(2),l=a(4),d=a(3),m=a(19),u=a(7),g=a.n(u),p=a(8),f=a.n(p),k=a(9),h=a.n(k),v=a(10),j=a.n(v),b=a(11),w=a.n(b),C=a(12),x=a.n(C),y=a(13),E=a.n(y),O=a(14),N=a.n(O),T=a(15),S=a.n(T),B=a(16),W=a.n(B),L=a(17),M=a.n(L),A=a(18),J=a.n(A),Y=(a(26),0),I=0,R=0,U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).one={id:1,img:g.a},e.two={id:2,img:f.a},e.three={id:3,img:h.a},e.four={id:4,img:j.a},e.five={id:5,img:w.a},e.six={id:6,img:x.a},e.seven={id:7,img:E.a},e.eight={id:8,img:N.a},e.nine={id:9,img:S.a},e.ten={id:10,img:W.a},e.eleven={id:11,img:M.a},e.twelve={id:12,img:J.a},e.defaultTrackClicked={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},e.state={tagState:!1,pics:[e.one,e.two,e.three,e.four,e.five,e.six,e.seven,e.eight,e.nine,e.ten,e.eleven,e.twelve],trackClicked:e.defaultTrackClicked},e.clickTheButton=function(t){var a=t.target,n=Object.values(e.state.trackClicked);console.log("imgsClicked: ",n);var c=a.id;console.log("The target",c);var i=Object(m.a)({},e.state.trackClicked);i[c]=e.state.trackClicked[c]+1,e.setState({trackClicked:i},(function(){var t,a,n,c=e.state.pics;for(n=c.length-1;n>0;n-=1)t=Math.floor(Math.random()*(n+1)),a=c[n],c[n]=c[t],c[t]=a;i=e.state.trackClicked;var o=!1,s=!0;for(n=0;n<Object.keys(i).length;n++)Object.values(i)[n]>1&&(o=!0,console.log("You Lose.")),1!=Object.values(i)[n]&&(s=!1);o?(R++,Y=0,e.setState({trackClicked:e.defaultTrackClicked})):(Y++,console.log("score: ",Y)),s&&(console.log("YOU WON"),console.log("score: ",Y),I++,Y=0,e.setState({trackClicked:e.defaulTrackClicked})),console.log("The new state is: ",e.state),e.state.tagState.trackClicked>1&&console.log("you Lose.")}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",{className:"inst"},"Robots vs Aliens!"),c.a.createElement("h3",{className:"inst"},"Click each tile exactly once and you win.  Click any image twice and you lose."),c.a.createElement("br",null),c.a.createElement("h2",{className:"score",id:"wins"},"Wins: ",I," "),c.a.createElement("h2",{className:"score",id:"score"},"Score: ",Y," "),c.a.createElement("h2",{className:"score",id:"losses"},"Losses: ",R," ")),c.a.createElement("div",{className:"row"},this.state.pics.map((function(t){return c.a.createElement("div",{key:t.id,className:"col-3"},c.a.createElement("img",{id:t.id,src:t.img,className:"",alt:"logo",onClick:e.clickTheButton}))}))))}}]),a}(c.a.Component),$=(a(27),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(U,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.578f1f20.chunk.js.map