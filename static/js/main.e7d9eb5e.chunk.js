(this["webpackJsonpwrestlingscoreboard-react"]=this["webpackJsonpwrestlingscoreboard-react"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(9),c=a.n(l),o=(a(17),a(1)),i=a(3),s=(a(18),a(10)),u=a.n(s),m=(a(19),function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),b={"6-7 yrs":{"N/A":{"N/A":[19,23,27,35,42,53,66,73]}},"8-9 yrs":{"N/A":{"N/A":[23,27,35,42,53,66,73]}},"10-11 yrs":{"N/A":{"N/A":[23,27,35,42,53,66,73,85]}},"12-13 yrs":{Female:{"N/A":[33,37,44,50,55,62,73,85]},Male:{"N/A":[35,41,48,55,62,69,75,89]}},"14-15 yrs":{Female:{"N/A":[35,40,45,50,55,60,65,70]},Male:{"N/A":[35,42,49,56,63,70,78,89]}},"16-17 yrs":{Female:{"N/A":[40,43,49,56,61,65,69,73]},Male:{"N/A":[48,55,62,69,74,86,92,110]}},"18-20 yrs":{Female:{"N/A":[50,53,57,62,68,76,85]},Male:{Freestyle:[57,65,74,79,86,92,97,125],"Greco-Roman":[60,67,77,87,97,130]}},"21yrs+":{Female:{"N/A":[50,53,57,62,68,76,85]},Male:{Freestyle:[57,65,74,79,86,92,97,125],"Greco-Roman":[60,67,77,87,97,130]}}},d=n.a.createContext(void 0),y=function(e){var t=e.visibility,a=e.totalDisplayMethod,l=e.matchStateMethod,c=e.matchPlayerInformationMethod,s=Object(r.useState)({mat:"A",age:"6-7 yrs",gender:"N/A",style:"N/A",weight:19}),u=Object(i.a)(s,2),m=u[0],b=u[1],y=Object(r.useState)({red:{playerColor:"red",firstName:"Red First Name",lastName:"",clubName:"",warnings:0,score:0},blue:{playerColor:"blue",firstName:"Blue First Name",lastName:"",clubName:"",warnings:0,score:0}}),g=Object(i.a)(y,2),h=g[0],f=g[1];return n.a.createElement("div",{style:t?{top:"0",left:"0",width:"100vw",height:"100vh",position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#8080807E"}:{display:"none"}},n.a.createElement("div",{className:"playerEntryView",id:"playerEntryView"},n.a.createElement("div",null,n.a.createElement("h1",null,"Match Details")),n.a.createElement("div",{id:"playerEntryMain"},n.a.createElement(p,{playerColour:"red",playerEntries:h,setPlayerEntries:f}),n.a.createElement(p,{playerColour:"blue",playerEntries:h,setPlayerEntries:f}),n.a.createElement(E,{matchInformation:m,setMatchInformation:b})),n.a.createElement("div",{id:"playerEntrySubmission"},n.a.createElement(d.Provider,{value:a},n.a.createElement(v,{setDetails:function(){var e=Object(i.a)(l,2),t=e[0],r=e[1],n=Object(i.a)(c,2)[1],s=Object(i.a)(a,2),u=s[0],b=s[1],d=function(){var e="";return e="Greco-Roman"===m.style?"Senior Greco-Roman":"18-20 yrs"===m.age||"21yrs+"===m.age?"Senior Freestyle":"Junior Freestyle",e}(),y="";y="Junior Freestyle"===d?"2:00":"3:00",r(Object(o.a)(Object(o.a)(Object(o.a)({},t),m),{},{playersSet:!0,currentTime:y,gameType:d})),n(Object(o.a)({},h)),b(Object(o.a)(Object(o.a)({},u),{},{playerEntryView:!1}))}})))))},p=function(e){var t=e.playerColour,a=e.playerEntries,r=e.setPlayerEntries;return n.a.createElement("div",{className:"playerEntry "+t},n.a.createElement("label",null,m(t),"'s First Name",n.a.createElement("br",null),n.a.createElement("input",{type:"text",value:a[t].firstName,onChange:function(e){var n=Object(o.a)({},a);n[t].firstName=e.target.value,r(n)}})),n.a.createElement("label",null,m(t),"'s Last Name",n.a.createElement("br",null),n.a.createElement("input",{type:"text",value:a[t].lastName,onChange:function(e){var n=Object(o.a)({},a);n[t].lastName=e.target.value,r(n)}})),n.a.createElement("label",null,m(t),"'s Club Name",n.a.createElement("br",null),n.a.createElement("input",{type:"text",value:a[t].clubName,onChange:function(e){var n=Object(o.a)({},a);n[t].clubName=e.target.value,r(n)}})))},E=function(e){var t=e.matchInformation,a=e.setMatchInformation,r=Object.keys(b).map((function(e){return n.a.createElement("option",{value:e,key:e},e)})),l=Object.keys(b[t.age]).map((function(e){return n.a.createElement("option",{value:e,key:e},e)})),c=Object.keys(b[t.age][t.gender]).map((function(e){return n.a.createElement("option",{value:e,key:e},e)})),i=b[t.age][t.gender][t.style].map((function(e){return n.a.createElement("option",{value:e,key:e},e)})),s=function(e,r){switch(r){case"mat":a(Object(o.a)(Object(o.a)({},t),{},{mat:e.target.value}));break;case"age":var n=Object.keys(b[e.target.value])[0],l=Object.keys(b[e.target.value][n])[0],c=b[e.target.value][n][l][0];a(Object(o.a)(Object(o.a)({},t),{},{age:e.target.value,gender:n,style:l,weight:c}));break;case"gender":var i=Object.keys(b[t.age][e.target.value])[0],s=b[t.age][e.target.value][i][0];a(Object(o.a)(Object(o.a)({},t),{},{gender:e.target.value,style:i,weight:s}));break;case"style":var u=b[t.age][t.gender][e.target.value][0];a(Object(o.a)(Object(o.a)({},t),{},{style:e.target.value,weight:u}));break;case"weight":a(Object(o.a)(Object(o.a)({},t),{},{weight:parseInt(e.target.value)}));break;default:throw new Error("Error: dropdowns")}};return n.a.createElement("div",{className:"matchInformation"},n.a.createElement("label",{htmlFor:"mat-select"},"Mat",n.a.createElement("br",null),n.a.createElement("select",{onChange:function(e){return s(e,"mat")},name:"mat",id:"mat-select"},n.a.createElement("option",{value:"A"},"A"),n.a.createElement("option",{value:"B"},"B"))),n.a.createElement("label",{htmlFor:"age-select"},"Age",n.a.createElement("br",null),n.a.createElement("select",{value:t.age,onChange:function(e){return s(e,"age")},name:"age",id:"age-select"},r)),n.a.createElement("label",{htmlFor:"gender-select",style:"N/A"===t.gender?{visibility:"hidden"}:{}},"Gender",n.a.createElement("br",null),n.a.createElement("select",{value:t.gender,onChange:function(e){return s(e,"gender")},name:"gender",id:"gender-select"},l)),n.a.createElement("label",{htmlFor:"style-select",style:"N/A"===t.style?{visibility:"hidden"}:{}},"Style",n.a.createElement("br",null),n.a.createElement("select",{value:t.style,onChange:function(e){return s(e,"style")},name:"style",id:"style-select"},c)),n.a.createElement("label",{htmlFor:"weight-select"},"Weight",n.a.createElement("br",null),n.a.createElement("select",{value:t.weight,onChange:function(e){return s(e,"weight")},name:"weight",id:"weight-select"},i)))},v=function(e){var t=e.setDetails,a=Object(r.useContext)(d),l=Object(i.a)(a,2),c=l[0],s=l[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:t},"Confirm"),n.a.createElement("button",{onClick:function(){return s(Object(o.a)(Object(o.a)({},c),{},{playerEntryView:!1}))}},"Cancel"))},g=(a(20),function(e){var t=e.visibility;return n.a.createElement("div",{id:"mainHeader",style:t?{}:{visibility:"hidden"}},n.a.createElement("span",{id:"logo"},n.a.createElement("img",{alt:"Wrestling WA Logo",src:"http://wrestlingwa.org/wp-content/uploads/wwa_logo.png"})),n.a.createElement("span",{id:"fedName"},"Wrestling Western Australia ",n.a.createElement("br",null)," Scoreboard"))}),h=(a(21),function(e){var t=e.visibility,a=e.totalDisplayMethod,r=e.ResetCurrentMatch;console.log("nav: "+t),console.log(a);var l=Object(i.a)(a,2),c=l[0],s=l[1];return n.a.createElement("div",{id:"navigation",style:t?{}:{visibility:"hidden"}},n.a.createElement("button",{className:"navigationButton",id:"setMatchButton",onClick:function(){return s(Object(o.a)(Object(o.a)({},c),{},{playerEntryView:!0}))}},"Set Match"),n.a.createElement("button",{className:"navigationButton",id:"resetMatchButton",onClick:function(){return r()}},"Reset All"),n.a.createElement("button",{className:"navigationButton",id:"importButton"},"Import"),n.a.createElement("button",{className:"navigationButton",id:"fixturesButton"},"Fixtures"),n.a.createElement("button",{className:"navigationButton",id:"prevButton"},"<<"),n.a.createElement("button",{className:"navigationButton",id:"nextButton"},">>"))}),f=(a(7),function(e){var t=e.playerColour,a=e.updateScore;return n.a.createElement("div",{className:"points-control "+t},n.a.createElement("div",{className:"buttonsRow "+t},n.a.createElement("button",{onClick:function(){return a(t,5)}},"+5"),n.a.createElement("button",{onClick:function(){return a(t,4)}},"+4"),n.a.createElement("button",{onClick:function(){return a(t,2)}},"+2"),n.a.createElement("button",{onClick:function(){return a(t,1)}},"+1"),n.a.createElement("button",{onClick:function(){return a(t,-1)}},"-1")))}),O=function(e){var t=e.playerColour;return n.a.createElement("div",{className:"penalty "+t},n.a.createElement("button",{className:"shotclockbtn",id:"shotclockbutton"+t},"Shot clock"),n.a.createElement("button",{className:"warning"},"Warning"))},N=function(e){var t=e.playerColour;return n.a.createElement("div",{className:"pin "+t},n.a.createElement("button",null,"Pin!"))},j=(a(22),a(11)),C=["Before Match","Period 1","Between P1","Rest","Between P2","Period 2","Match End"],w=function(e){var t=e.visibility,a=e.matchPlayerInformationMethod,l=e.matchStateMethod,c=e.timer,s=e.Victory,u=Object(i.a)(a,2),m=u[0],b=u[1],d=Object(i.a)(l,2),y=d[0],p=d[1],E=Object(r.useCallback)((function(){p(Object(o.a)(Object(o.a)({},y),{},{currentTime:c.getTimeValues().toString(["minutes","seconds"]).slice(1)}))}),[y,p,c]),v=Object(r.useCallback)((function(){y.phase===C[1]?p(Object(o.a)(Object(o.a)({},y),{},{phase:C[2],currentTime:"0:00",paused:!0})):y.phase===C[3]?p(Object(o.a)(Object(o.a)({},y),{},{phase:C[4],currentTime:"0:00",paused:!0})):y.phase===C[5]&&p(Object(o.a)(Object(o.a)({},y),{},{phase:C[6],currentTime:"0:00",paused:!0}))}),[y,p]);Object(r.useEffect)((function(){return console.log("event listener Made!'"),c.addEventListener("secondsUpdated",E),c.addEventListener("targetAchieved",v),function(){c.removeEventListener("secondsUpdated",E),c.removeEventListener("targetAchieved",v)}}),[v,c,E]);var g=function(e,t){if([-1,1,2,4,5].includes(t)&&y.started){var a=Object(o.a)({},m);0===a[e].score&&t<0||(a[e].score+=t,b(a),A(m,y,c,s))}};return n.a.createElement("div",{id:"outer"},n.a.createElement("div",{id:"scoreboard",style:t?{}:{visibility:"hidden"}},n.a.createElement(S,{playerColour:"red",matchPlayerInformation:m}),n.a.createElement(k,{matchState:y,setMatchState:p,timer:c,matchPlayerInformation:m,Victory:s}),n.a.createElement(S,{playerColour:"blue",matchPlayerInformation:m}),n.a.createElement(M,{playerColour:"red",matchPlayerInformation:m}),n.a.createElement(M,{playerColour:"blue",matchPlayerInformation:m}),n.a.createElement(f,{playerColour:"red",updateScore:g}),n.a.createElement(f,{playerColour:"blue",updateScore:g}),n.a.createElement(O,{playerColour:"red"}),n.a.createElement(O,{playerColour:"blue"}),n.a.createElement(N,{playerColour:"red"}),n.a.createElement(N,{playerColour:"blue"})))},k=function(e){var t=e.matchState,a=e.timer,r=e.setMatchState,l=e.matchPlayerInformation,c=e.Victory;return n.a.createElement("div",{className:"middle",style:t.paused?{backgroundColor:"grey"}:{}},n.a.createElement("span",{id:"period"},t.phase),n.a.createElement("br",null),n.a.createElement("span",{id:"gameType"},"".concat(t.gameType,", ").concat(t.age,", ").concat(t.weight,"kg")),n.a.createElement("br",null),n.a.createElement("span",{id:"timer"},t.currentTime),n.a.createElement("br",null),n.a.createElement("button",{className:"timer",id:"startTimer",onClick:function(){var e=0;e="Junior Freestyle"===t.gameType?120:180,t.phase===C[0]&&t.playersSet?(r(Object(o.a)(Object(o.a)({},t),{},{phase:C[1],started:!0})),a.start({countdown:!0,startValues:{seconds:e}})):t.phase===C[2]&&t.started?(r(Object(o.a)(Object(o.a)({},t),{},{phase:C[3],paused:!1})),a.start({countdown:!0,startValues:{seconds:30}})):t.phase===C[4]&&t.started?(r(Object(o.a)(Object(o.a)({},t),{},{phase:C[5],paused:!1})),a.start({countdown:!0,startValues:{seconds:e}})):t.phase===C[6]&&t.started?(console.log("Match has ended"),A(l,t,a,c)):t.started&&!t.paused?(r(Object(o.a)(Object(o.a)({},t),{},{paused:!0})),a.pause()):t.started&&t.paused&&(r(Object(o.a)(Object(o.a)({},t),{},{paused:!1})),a.start())}},"Before Match"===t.phase?"\u25b6":t.paused?t.paused?"\u25b6":"bug":n.a.createElement(j.a,{icon:["fas","pause"]})))},S=function(e){var t=e.playerColour,a=e.matchPlayerInformation;return n.a.createElement("div",{className:"playerData "+t},n.a.createElement("span",{className:"firstName "+m(t)},a[t].firstName),n.a.createElement("br",null),n.a.createElement("span",{className:"lastName "+m(t)},a[t].lastName),n.a.createElement("br",null),n.a.createElement("span",{className:"clubName "+m(t)},a[t].clubName))},M=function(e){var t=e.playerColour,a=e.matchPlayerInformation;return n.a.createElement("div",{className:"scorebox "+t},n.a.createElement("div",{className:"markerWarning "+m(t)}),n.a.createElement("div",{className:"score "+m(t)},a[t].score),n.a.createElement("div",{className:"shotclock "+m(t)},"0:00"))},A=function(e,t,a,r){var n=10;"Greco-Roman"===t.style?n=8:"Freestyle"===t.style&&(n=10),e.blue.score-e.red.score>=n?(a.pause(),r("blue","Technical Superiority")):e.red.score-e.blue.score>=n&&(a.pause(),r("red","Technical Superiority")),t.phase===C[6]&&(e.blue.score===e.red.score?(r("draw","Points"),console.log("Outcome is draw")):e.blue.score-e.red.score>0?r("blue","Points"):r("red","Points"))},P=(a(27),function(e){var t=e.visibility,a=e.victoryState,r=e.SetVisibilityOf;return n.a.createElement("div",{style:t?{top:"0",left:"0",width:"100vw",height:"100vh",position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#8080807E"}:{display:"none"}},"draw"===a.playerColour?n.a.createElement("div",{className:"victoryScreenView",style:{backgroundColor:"black"}},n.a.createElement("p",null,"Draw!"),n.a.createElement("button",{onClick:function(){return r("victoryScreen",!1)}},"OK")):n.a.createElement("div",{className:"victoryScreenView",style:"red"===a.playerColour?{backgroundColor:"red"}:{backgroundColor:"blue"}},n.a.createElement("p",null,a.playerName," ",n.a.createElement("br",null)," wins by ",n.a.createElement("br",null)," ",a.reason),n.a.createElement("button",{onClick:function(){return r("victoryScreen",!1)}},"OK")))}),F={mainHeader:!0,navigation:!0,playerEntryView:!1,scoreboard:!0,victoryScreen:!1},B={red:{playerColor:"red",firstName:"firstName",lastName:"lastName",clubName:"clubName",warnings:0,score:0},blue:{playerColor:"blue",firstName:"firstName",lastName:"lastName",clubName:"clubName",warnings:0,score:0}},I={mat:"",age:"",gender:"",style:"",gameType:"",weight:0,currentTime:"0:00",playersSet:!1,started:!1,paused:!1,phase:"Before Match"},V={playerName:"",playerColour:"",reason:""},T=function(){var e=Object(r.useState)(F),t=Object(i.a)(e,2),a=t[0],l=t[1],c=[a,l],s=Object(r.useState)(B),m=Object(i.a)(s,2),b=m[0],d=m[1],p=[b,d],E=Object(r.useState)(I),v=Object(i.a)(E,2),f=v[0],O=v[1],N=[f,O],j=Object(r.useState)(new u.a),C=Object(i.a)(j,1)[0],k=Object(r.useState)(V),S=Object(i.a)(k,2),M=S[0],A=S[1];return console.log(f),console.log(b),n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{visibility:a.mainHeader}),n.a.createElement(h,{visibility:a.navigation,totalDisplayMethod:c,ResetCurrentMatch:function(){d(Object(o.a)({},B)),O(Object(o.a)({},I)),C.stop()}}),n.a.createElement(y,{visibility:a.playerEntryView,totalDisplayMethod:c,matchStateMethod:N,matchPlayerInformationMethod:p}),n.a.createElement(w,{visibility:a.scoreboard,matchPlayerInformationMethod:p,matchStateMethod:N,timer:C,Victory:function(e,t){var r=Object(o.a)({},b);l(Object(o.a)(Object(o.a)({},a),{},{victoryScreen:!0})),A("draw"===e?Object(o.a)(Object(o.a)({},M),{},{reason:t,playerColour:e,playerName:e}):Object(o.a)(Object(o.a)({},M),{},{reason:t,playerColour:e,playerName:"".concat(r[e].firstName," ").concat(r[e].lastName)}))}}),n.a.createElement(P,{visibility:a.victoryScreen,victoryState:M,SetVisibilityOf:function(e,t){var r=Object(o.a)({},a);r[e]=t,l(r)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.e7d9eb5e.chunk.js.map