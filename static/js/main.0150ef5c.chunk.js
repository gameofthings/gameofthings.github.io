(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),o=n(24),u=n(160),i=n(154),m=n(155),E=n(83),s=n(156),f=n(79),b=n.n(f),p=n(80),y=n.n(p),d="SET_GAME_INFO",h="SET_PLAYER_INFO",g="SET_NAME",v="SET_ERROR";function j(e){return{type:h,payload:e}}function O(e){return{type:g,payload:e}}function w(e){return{type:d,payload:e}}function G(e,t){return{type:v,payload:{errorId:e,error:t}}}var k=n(81),I=null;function x(e,t){(I=y()(k.serverEndpoint,{secure:!0,reconnection:!1})).on("connect",function(){console.log("Connected")}),I.on("connect_error",function(){I=null,console.log("Failed to connect")}),I.on("allUpdate",function(t,n){e(G("lobbyError","")),e(w(t)),e(j(n))}),I.on("backendError",function(e){console.log(e)}),I.on("disconnect",function(){I=null,S(t)})}function S(e){null!=I&&I.emit("leaveGame"),e.push("/")}function F(e){e.push("/game")}var C=n(32);var T=Object(o.e)(function(e){var t=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{bg:"dark"},r.a.createElement(u.a.Brand,{style:{color:"white"}},r.a.createElement(i.a,{style:{padding:"0px"}},r.a.createElement(m.a,null,r.a.createElement(E.a,{style:{paddingLeft:"10px",margin:0}},r.a.createElement(C.b,{to:"/"},r.a.createElement(s.a,{src:b.a,alt:"",width:"30px",onClick:function(){S(t)}}))),r.a.createElement(E.a,{style:{paddingLeft:"0px",margin:0}},r.a.createElement("h5",null,"Things: The Game")))))))}),B=n(157),A=n(85);var N=function(e){var t=e.history;return r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement(B.a,null,r.a.createElement("center",null,r.a.createElement("h2",null,"Things: The Game"),r.a.createElement("h6",null,"Created by: Alex King"),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"primary",block:!0,onClick:function(){return function(e){e.push("/newGame")}(t)}},"New Game"),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"secondary",block:!0,onClick:function(){return function(e){e.push("/joinGame")}(t)}},"Join Game"))))))},L=n(7),P=n(21),R=n(161);var _=function(e){var t=e.history,n=Object(L.c)(function(e){return e.errors}),a=Object(L.c)(function(e){return e.gameInfo}),l=Object(L.c)(function(e){return e.playerInfo}),c=Object(L.b)();function o(e){var t;e.preventDefault(),c((t=a.gameId,function(e){I.emit("startRound",t),I.on("notEnoughPlayers",function(t){e(G("lobbyError","Need at least 3 people to start game. You only have "+t))})}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Game Code: ",a.gameId),r.a.createElement("h5",null,"Players:"),r.a.createElement(R.a,null,function(){var e=[];for(var t in l)e.push(Object(P.a)({name:t},l[t]));return e}().map(function(e){return r.a.createElement(R.a.Item,{key:e.name,style:{color:"white"}},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,{xs:9,style:{textAlign:"left"}},e.name),r.a.createElement(E.a,{xs:3,style:{textAlign:"right"}},e.points))))})),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"primary",block:!0,onClick:function(e){return o(e)}},"Start Round"),r.a.createElement(A.a,{variant:"secondary",block:!0,onClick:function(){return S(t)}},"Leave Game"),function(){if(""!==n.lobbyError)return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h5",null,n.lobbyError,"!!!"))}())},D=n(18),W=n(159);var J=function(e){e.history;var t=Object(L.b)(),n=Object(L.c)(function(e){return e.gameInfo}),l=Object(L.c)(function(e){return e.playerInfo}),c=Object(L.c)(function(e){return e.name}),o=Object(a.useState)(""),u=Object(D.a)(o,2),i=u[0],m=u[1];function E(e){e.preventDefault(),t(function(e,t,n){return function(a){I.emit("submittedAnswer",e,t,n)}}(n.gameId,c,i)),m("")}function s(e){m(e.target.value)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Topic:"),r.a.createElement("h5",{style:{marginBottom:"15px",fontStyle:"italic"}},n.topic),function(){switch(l[c].state){case"unanswered":return r.a.createElement(W.a,{onSubmit:function(e){return E(e)}},r.a.createElement(W.a.Group,{controlId:"answerField"},r.a.createElement(W.a.Label,null,"Answer: "),r.a.createElement("br",null),r.a.createElement(W.a.Control,{type:"input",value:i,onChange:s})),r.a.createElement(A.a,{type:"submit",variant:"primary",block:!0},"Submit Answer"));case"answered":return r.a.createElement("h5",null,"Waiting on others to submit answer...");default:return r.a.createElement(r.a.Fragment,null)}}())};var M=function(e){e.history;var t=Object(L.b)(),n=Object(L.c)(function(e){return e.gameInfo}),l=Object(L.c)(function(e){return e.playerInfo}),c=Object(L.c)(function(e){return e.name}),o=Object(a.useState)(""),u=Object(D.a)(o,2),i=u[0],m=u[1];function E(e){var a,r;e.preventDefault(),t((a=n.gameId,r=i,function(e){I.emit("submittedTopic",a,r)})),m("")}function s(e){m(e.target.value)}return r.a.createElement(r.a.Fragment,null,function(){switch(l[c].state){case"topic":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Enter topic for round:"),r.a.createElement(W.a,{onSubmit:function(e){E(e)}},r.a.createElement(W.a.Group,{controlId:"topicSubmission"},r.a.createElement(W.a.Label,null,"Topic: "),r.a.createElement("br",null),r.a.createElement(W.a.Control,{type:"input",value:i,onChange:s})),r.a.createElement(A.a,{type:"submit",variant:"primary",block:!0},"Submit Topic")));case"waiting":return r.a.createElement("h5",{style:{marginBottom:"15px",fontStyle:"italic"}},"Waiting for topic submission...");default:return r.a.createElement("p",null)}}())},K=n(158),U=n(43);var V=function(e){e.history;var t=Object(L.c)(function(e){return e.gameInfo}),n=Object(L.c)(function(e){return e.playerInfo}),a=Object(L.c)(function(e){return e.name}),l=Object(L.b)();function c(e,n,r){var c={name:e,answer:r};l(function(e,t,n){return function(a){I.emit("voted",e,t,n)}}(t.gameId,a,c))}function o(e){switch(n[a].state){case"voting":return function(e){var t=[];for(var l in n)t.push(l);return"out"===e.state?r.a.createElement(r.a.Fragment,null):r.a.createElement(K.a,{title:"Vote for player",onSelect:function(t,n){return c(t,0,e.answer)}},t.map(function(e){return e===a?r.a.createElement(r.a.Fragment,{key:e}):r.a.createElement(U.a.Item,{eventKey:e,key:e},e)}))}(e);default:return r.a.createElement(r.a.Fragment,null)}}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Status: ",function(){switch(n[a].state){case"out":return"OUT";case"voting":return"VOTE";default:return"WAIT"}}()),r.a.createElement("h5",null,"Topic:"),r.a.createElement("h5",{style:{marginBottom:"15px",fontStyle:"italic",borderBottom:"2px solid white",paddingBottom:"15px"}},t.topic),function(){var e=[];for(var t in n)e.push(Object(P.a)({name:t},n[t]));return function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(e)}().map(function(e){return function(e){return e.name===a?r.a.createElement(r.a.Fragment,{key:e.name}):r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("h5",null,function(e){switch(e.state){case"out":return e.name+":";default:return"????:"}}(e)),r.a.createElement("h5",{style:{marginBottom:"15px",fontStyle:"italic"}},e.answer),o(e),r.a.createElement("div",{style:{marginBottom:"15px",borderBottom:"2px solid white",paddingBottom:"15px"}}))}(e)}))};var Y=function(e){e.history;var t=Object(L.c)(function(e){return e.gameInfo}),n=Object(L.c)(function(e){return e.playerInfo}),a=Object(L.b)();function l(e){var n;e.preventDefault(),a((n=t.gameId,function(e){I.emit("backToLobby",n)}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Results:"),r.a.createElement(R.a,null,function(){var e=[];for(var t in n)e.push(Object(P.a)({name:t},n[t]));return e}().map(function(e){return r.a.createElement(R.a.Item,{key:e.name,style:{color:"white"}},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,{xs:9,style:{textAlign:"left"}},e.name),r.a.createElement(E.a,{xs:3,style:{textAlign:"right"}},"+"+e.roundPoints))))})),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"primary",block:!0,onClick:function(e){return l(e)}},"Back to Lobby"))};var H=function(e){var t=e.history,n=Object(L.c)(function(e){return e.gameInfo});return""===n.gameId&&S(t),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement(B.a,null,function(){switch(n.gameState){case"lobby":return r.a.createElement(_,{history:t});case"topic":return r.a.createElement(M,{history:t});case"answering":return r.a.createElement(J,{history:t});case"voting":return r.a.createElement(V,{history:t});case"results":return r.a.createElement(Y,{history:t});default:return r.a.createElement(_,{history:t})}}())))))};var $=function(e){var t=e.history,n=Object(L.b)(),l=Object(L.c)(function(e){return e.errors}),c=Object(a.useState)(""),o=Object(D.a)(c,2),u=o[0],s=o[1];function f(e){e.preventDefault(),n(function(e,t){return function(n){null==I&&x(n,t),null!=I&&(I.emit("newGame",e),I.on("addedToGame",function(a,r){n(O(e)),n(w(a)),n(j(r)),F(t),n(G("lobbyError",""))}))}}(u,t)),s("")}return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement(B.a,null,r.a.createElement("center",null,r.a.createElement("h3",null,"New Game Options"),r.a.createElement(W.a,{onSubmit:function(e){f(e)}},r.a.createElement(W.a.Group,{controlId:"playerName"},r.a.createElement(W.a.Label,null,"Name: "),r.a.createElement("br",null),r.a.createElement(W.a.Control,{type:"input",value:u,onChange:function(e){s(e.target.value)}})),r.a.createElement(A.a,{type:"submit",variant:"primary",block:!0},"Start")),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"secondary",block:!0,onClick:function(){return S(t)}},"Back"),function(){if(""!==l.newGameError)return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h5",null,l.newGameError,"!!!"))}()))))))};var q=function(e){var t=e.history,n=Object(L.b)(),l=Object(L.c)(function(e){return e.errors}),c=Object(a.useState)(""),o=Object(D.a)(c,2),u=o[0],s=o[1],f=Object(a.useState)(""),b=Object(D.a)(f,2),p=b[0],y=b[1];function d(e){e.preventDefault(),n(function(e,t,n){return function(a){null==I&&x(a,n),null!=I&&(I.emit("joinGame",t,e),I.on("addedToGame",function(t,r){a(O(e)),a(w(t)),a(j(r)),F(n),a(G("lobbyError",""))}),I.on("noGameFound",function(e){a(G("joinGameError","Game "+t+" not found"))}),I.on("nameAlreadyExists",function(t){a(G("joinGameError","Name "+e+" already exists in the game"))}),I.on("gameInProgress",function(e){a(G("joinGameError","Game "+t+" already in progress. Wait until they're in the lobby"))}))}}(u,p,t)),s(""),y("")}return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement(B.a,null,r.a.createElement("center",null,r.a.createElement("h3",null,"Join Game Options"),r.a.createElement(W.a,{onSubmit:function(e){return d(e)}},r.a.createElement(W.a.Group,{controlId:"playerName"},r.a.createElement(W.a.Label,null,"Name: "),r.a.createElement("br",null),r.a.createElement(W.a.Control,{type:"input",value:u,onChange:function(e){s(e.target.value),""!==l.joinGameError&&n(G("joinGameError",""))}})),r.a.createElement(W.a.Group,{controlId:"numberOfPlayers"},r.a.createElement(W.a.Label,null,"Game Code: "),r.a.createElement("br",null),r.a.createElement(W.a.Control,{type:"input",value:p,onChange:function(e){y(e.target.value),""!==l.joinGameError&&n(G("joinGameError",""))}})),r.a.createElement(A.a,{type:"submit",variant:"primary",block:!0},"Start")),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"secondary",block:!0,onClick:function(){return S(t)}},"Back"),function(){if(""!==l.joinGameError)return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h5",null,l.joinGameError,"!!!"))}()))))))};var z=function(e){var t=e.history;return r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement(B.a,null,r.a.createElement("center",null,r.a.createElement("h2",null,"Page Not Found"),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"secondary",block:!0,onClick:function(){return S(t)}},"Home"),r.a.createElement("br",null))))))};var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:N}),r.a.createElement(o.a,{exact:!0,path:"/newGame",component:$}),r.a.createElement(o.a,{exact:!0,path:"/joinGame",component:q}),r.a.createElement(o.a,{exact:!0,path:"/game",component:H}),r.a.createElement(o.a,{component:z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(25),Z={gameId:"",gameState:"lobby",topic:"placeholder"};var ee={};var te={newGameError:"",joinGameError:"",lobbyError:""};var ne=Object(X.c)({gameInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}},playerInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}},name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return e[t.payload.errorId]=t.payload.error,Object(P.a)({},e);default:return e}}}),ae=n(92),re=Object(X.d)(ne,Object(X.a)(ae.a));c.a.render(r.a.createElement(C.a,null,r.a.createElement(L.a,{store:re},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){e.exports=n.p+"static/media/home.800b2a8d.svg"},81:function(e){e.exports={serverEndpoint:"https://184.57.58.234:3001"}},93:function(e,t,n){e.exports=n(152)}},[[93,1,2]]]);
//# sourceMappingURL=main.0150ef5c.chunk.js.map