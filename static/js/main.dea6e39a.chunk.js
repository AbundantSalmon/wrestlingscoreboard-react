(this["webpackJsonpwrestlingscoreboard-react"]=this["webpackJsonpwrestlingscoreboard-react"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(17),a(1)),i=a(3),s=(a(18),a(10)),u=a.n(s),m=(a(19),function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),d={"6-7 yrs":{"N/A":{"N/A":[19,23,27,35,42,53,66,73]}},"8-9 yrs":{"N/A":{"N/A":[23,27,35,42,53,66,73]}},"10-11 yrs":{"N/A":{"N/A":[23,27,35,42,53,66,73,85]}},"12-13 yrs":{Female:{"N/A":[33,37,44,50,55,62,73,85]},Male:{"N/A":[35,41,48,55,62,69,75,89]}},"14-15 yrs":{Female:{"N/A":[35,40,45,50,55,60,65,70]},Male:{"N/A":[35,42,49,56,63,70,78,89]}},"16-17 yrs":{Female:{"N/A":[40,43,49,56,61,65,69,73]},Male:{"N/A":[48,55,62,69,74,86,92,110]}},"18-20 yrs":{Female:{"N/A":[50,53,57,62,68,76,85]},Male:{Freestyle:[57,65,74,79,86,92,97,125],"Greco-Roman":[60,67,77,87,97,130]}},"21yrs+":{Female:{"N/A":[50,53,57,62,68,76,85]},Male:{Freestyle:[57,65,74,79,86,92,97,125],"Greco-Roman":[60,67,77,87,97,130]}}},b=r.a.createContext(void 0),y=function(e){var t=e.visibility,a=e.totalDisplayMethod,l=e.matchStateMethod,c=e.matchPlayerInformationMethod,s=Object(n.useState)({mat:"A",age:"6-7 yrs",gender:"N/A",style:"N/A",weight:19}),u=Object(i.a)(s,2),m=u[0],d=u[1],y=Object(n.useState)({red:{playerColor:"red",firstName:"Red First Name",lastName:"",clubName:"",warnings:0,score:0},blue:{playerColor:"blue",firstName:"Blue First Name",lastName:"",clubName:"",warnings:0,score:0}}),g=Object(i.a)(y,2),v=g[0],f=g[1];return r.a.createElement("div",{style:t?{top:"0",left:"0",width:"100vw",height:"100vh",position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#8080807E"}:{display:"none"}},r.a.createElement("div",{className:"playerEntryView",id:"playerEntryView"},r.a.createElement("div",null,r.a.createElement("h1",null,"Match Details")),r.a.createElement("div",{id:"playerEntryMain"},r.a.createElement(h,{playerColour:"red",playerEntries:v,setPlayerEntries:f}),r.a.createElement(h,{playerColour:"blue",playerEntries:v,setPlayerEntries:f}),r.a.createElement(p,{matchInformation:m,setMatchInformation:d})),r.a.createElement("div",{id:"playerEntrySubmission"},r.a.createElement(b.Provider,{value:a},r.a.createElement(E,{setDetails:function(){var e=Object(i.a)(l,2),t=e[0],n=e[1],r=Object(i.a)(c,2)[1],s=Object(i.a)(a,2),u=s[0],d=s[1],b=function(){var e="";return e="Greco-Roman"===m.style?"Senior Greco-Roman":"18-20 yrs"===m.age||"21yrs+"===m.age?"Senior Freestyle":"Junior Freestyle",e}(),y="";y="Junior Freestyle"===b?"2:00":"3:00",n(Object(o.a)(Object(o.a)(Object(o.a)({},t),m),{},{playersSet:!0,currentTime:y,gameType:b})),r(Object(o.a)({},v)),d(Object(o.a)(Object(o.a)({},u),{},{playerEntryView:!1}))}})))))},h=function(e){var t=e.playerColour,a=e.playerEntries,n=e.setPlayerEntries;return r.a.createElement("div",{className:"playerEntry "+t},r.a.createElement("label",null,m(t),"'s First Name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:a[t].firstName,onChange:function(e){var r=Object(o.a)({},a);r[t].firstName=e.target.value,n(r)}})),r.a.createElement("label",null,m(t),"'s Last Name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:a[t].lastName,onChange:function(e){var r=Object(o.a)({},a);r[t].lastName=e.target.value,n(r)}})),r.a.createElement("label",null,m(t),"'s Club Name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:a[t].clubName,onChange:function(e){var r=Object(o.a)({},a);r[t].clubName=e.target.value,n(r)}})))},p=function(e){var t=e.matchInformation,a=e.setMatchInformation,n=Object.keys(d).map((function(e){return r.a.createElement("option",{value:e,key:e},e)})),l=Object.keys(d[t.age]).map((function(e){return r.a.createElement("option",{value:e,key:e},e)})),c=Object.keys(d[t.age][t.gender]).map((function(e){return r.a.createElement("option",{value:e,key:e},e)})),i=d[t.age][t.gender][t.style].map((function(e){return r.a.createElement("option",{value:e,key:e},e)})),s=function(e,n){switch(n){case"mat":a(Object(o.a)(Object(o.a)({},t),{},{mat:e.target.value}));break;case"age":var r=Object.keys(d[e.target.value])[0],l=Object.keys(d[e.target.value][r])[0],c=d[e.target.value][r][l][0];a(Object(o.a)(Object(o.a)({},t),{},{age:e.target.value,gender:r,style:l,weight:c}));break;case"gender":var i=Object.keys(d[t.age][e.target.value])[0],s=d[t.age][e.target.value][i][0];a(Object(o.a)(Object(o.a)({},t),{},{gender:e.target.value,style:i,weight:s}));break;case"style":var u=d[t.age][t.gender][e.target.value][0];a(Object(o.a)(Object(o.a)({},t),{},{style:e.target.value,weight:u}));break;case"weight":a(Object(o.a)(Object(o.a)({},t),{},{weight:parseInt(e.target.value)}));break;default:throw new Error("Error: dropdowns")}};return r.a.createElement("div",{className:"matchInformation"},r.a.createElement("label",{htmlFor:"mat-select"},"Mat",r.a.createElement("br",null),r.a.createElement("select",{onChange:function(e){return s(e,"mat")},name:"mat",id:"mat-select"},r.a.createElement("option",{value:"A"},"A"),r.a.createElement("option",{value:"B"},"B"))),r.a.createElement("label",{htmlFor:"age-select"},"Age",r.a.createElement("br",null),r.a.createElement("select",{value:t.age,onChange:function(e){return s(e,"age")},name:"age",id:"age-select"},n)),r.a.createElement("label",{htmlFor:"gender-select",style:"N/A"===t.gender?{visibility:"hidden"}:{}},"Gender",r.a.createElement("br",null),r.a.createElement("select",{value:t.gender,onChange:function(e){return s(e,"gender")},name:"gender",id:"gender-select"},l)),r.a.createElement("label",{htmlFor:"style-select",style:"N/A"===t.style?{visibility:"hidden"}:{}},"Style",r.a.createElement("br",null),r.a.createElement("select",{value:t.style,onChange:function(e){return s(e,"style")},name:"style",id:"style-select"},c)),r.a.createElement("label",{htmlFor:"weight-select"},"Weight",r.a.createElement("br",null),r.a.createElement("select",{value:t.weight,onChange:function(e){return s(e,"weight")},name:"weight",id:"weight-select"},i)))},E=function(e){var t=e.setDetails,a=Object(n.useContext)(b),l=Object(i.a)(a,2),c=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:t},"Confirm"),r.a.createElement("button",{onClick:function(){return s(Object(o.a)(Object(o.a)({},c),{},{playerEntryView:!1}))}},"Cancel"))},g=(a(20),function(e){var t=e.visibility;return r.a.createElement("div",{id:"mainHeader",style:t?{}:{visibility:"hidden"}},r.a.createElement("span",{id:"logo"},r.a.createElement("img",{alt:"Wrestling WA Logo",src:"http://wrestlingwa.org/wp-content/uploads/wwa_logo.png"})),r.a.createElement("span",{id:"fedName"},"Wrestling Western Australia ",r.a.createElement("br",null)," Scoreboard"))}),v=(a(21),function(e){var t=e.visibility,a=e.totalDisplayMethod,n=e.ResetCurrentMatch;console.log("nav: "+t),console.log(a);var l=Object(i.a)(a,2),c=l[0],s=l[1];return r.a.createElement("div",{id:"navigation",style:t?{}:{visibility:"hidden"}},r.a.createElement("button",{className:"navigationButton",id:"setMatchButton",onClick:function(){return s(Object(o.a)(Object(o.a)({},c),{},{playerEntryView:!0}))}},"Set Match"),r.a.createElement("button",{className:"navigationButton",id:"resetMatchButton",onClick:function(){return n()}},"Reset All"),r.a.createElement("button",{className:"navigationButton",id:"importButton",disabled:!0,style:{opacity:.5}},"Import"),r.a.createElement("button",{className:"navigationButton",id:"fixturesButton",disabled:!0,style:{opacity:.5}},"Fixtures"),r.a.createElement("button",{className:"navigationButton",id:"prevButton",disabled:!0,style:{opacity:.5}},"<<"),r.a.createElement("button",{className:"navigationButton",id:"nextButton",disabled:!0,style:{opacity:.5}},">>"))}),f=(a(7),function(e){var t=e.playerColour,a=e.updateScore;return r.a.createElement("div",{className:"points-control "+t},r.a.createElement("div",{className:"buttonsRow "+t},r.a.createElement("button",{onClick:function(){return a(t,5)}},"+5"),r.a.createElement("button",{onClick:function(){return a(t,4)}},"+4"),r.a.createElement("button",{onClick:function(){return a(t,2)}},"+2"),r.a.createElement("button",{onClick:function(){return a(t,1)}},"+1"),r.a.createElement("button",{onClick:function(){return a(t,-1)}},"-1")))}),O=function(e){var t=e.playerColour,a=e.handleWarningButton,n=e.handleShotClockButton;return r.a.createElement("div",{className:"penalty "+t},r.a.createElement("button",{className:"shotclockbtn",id:"shotclockbutton"+t,onClick:function(){return n(t)}},"Shot clock"),r.a.createElement("button",{className:"warning",onClick:function(){return a(t)}},"Warning"))},j=function(e){var t=e.playerColour,a=e.handlePinButton;return r.a.createElement("div",{className:"pin "+t},r.a.createElement("button",{onClick:function(){a(t)}},"Pin!"))},C=(a(22),a(11)),N=["Before Match","Period 1","Between P1","Rest","Between P2","Period 2","Match End"],k=function(e){var t=e.visibility,a=e.matchPlayerInformationMethod,l=e.matchStateMethod,c=e.timer,s=e.Victory,u=Object(i.a)(a,2),m=u[0],d=u[1],b=Object(i.a)(l,2),y=b[0],h=b[1],p=Object(n.useCallback)((function(e,t){if([-1,1,2,4,5].includes(t)&&y.started){var a=Object(o.a)({},m);0===a[e].score&&t<0||(a[e].score+=t,d(a),y.shotClockOn&&t>0&&h(Object(o.a)(Object(o.a)({},y),{},{shotClockOn:!1})),B(m,y,c,s))}}),[s,m,y,d,h,c]),E=function(e){y.started&&(c.pause(),s(e,"Fall"))},g=Object(n.useCallback)((function(){h(Object(o.a)(Object(o.a)({},y),{},{currentTime:c.getTimeValues().toString(["minutes","seconds"]).slice(1)})),y.shotClockOn&&c.getTotalTimeValues().seconds-y.shotClockSeconds===0&&(h(Object(o.a)(Object(o.a)({},y),{},{shotClockOn:!1})),p(Object.keys(m).filter((function(e){return e!==y.shotClockPlayer}))[0],1))}),[m,y,h,c,p]),v=Object(n.useCallback)((function(){y.phase===N[1]?h(Object(o.a)(Object(o.a)({},y),{},{phase:N[2],currentTime:"0:00",paused:!0})):y.phase===N[3]?h(Object(o.a)(Object(o.a)({},y),{},{phase:N[4],currentTime:"0:00",paused:!0})):y.phase===N[5]&&h(Object(o.a)(Object(o.a)({},y),{},{phase:N[6],currentTime:"0:00",paused:!0}))}),[y,h]);Object(n.useEffect)((function(){return console.log("event listener Made!'"),c.addEventListener("secondsUpdated",g),c.addEventListener("targetAchieved",v),function(){c.removeEventListener("secondsUpdated",g),c.removeEventListener("targetAchieved",v)}}),[v,c,g]);var C=function(e){if(m[e].warnings<2){var t=Object(o.a)({},m);t[e].warnings+=1,d(t)}else c.pause(),s(Object.keys(m).filter((function(t){return t!==e}))[0],"Disqualification")},k=function(e){console.log(y.started+" "+!y.shotClockOn+" "+c.getTotalTimeValues().seconds),y.started&&!y.shotClockOn&&c.getTotalTimeValues().seconds>=30&&(y.phase!==N[1]&&y.phase!==N[5]||h(Object(o.a)(Object(o.a)({},y),{},{shotClockOn:!0,shotClockPlayer:e,shotClockSeconds:c.getTotalTimeValues().seconds-30})))};return r.a.createElement("div",{id:"outer"},r.a.createElement("div",{id:"scoreboard",style:t?{}:{visibility:"hidden"}},r.a.createElement(S,{playerColour:"red",matchPlayerInformation:m}),r.a.createElement(w,{matchState:y,setMatchState:h,timer:c,matchPlayerInformation:m,Victory:s}),r.a.createElement(S,{playerColour:"blue",matchPlayerInformation:m}),r.a.createElement(M,{playerColour:"red",matchPlayerInformation:m,matchState:y,timer:c}),r.a.createElement(M,{playerColour:"blue",matchPlayerInformation:m,matchState:y,timer:c}),r.a.createElement(f,{playerColour:"red",updateScore:p}),r.a.createElement(f,{playerColour:"blue",updateScore:p}),r.a.createElement(O,{playerColour:"red",handleWarningButton:C,handleShotClockButton:k}),r.a.createElement(O,{playerColour:"blue",handleWarningButton:C,handleShotClockButton:k}),r.a.createElement(j,{playerColour:"red",handlePinButton:E}),r.a.createElement(j,{playerColour:"blue",handlePinButton:E})))},w=function(e){var t=e.matchState,a=e.timer,n=e.setMatchState,l=e.matchPlayerInformation,c=e.Victory;return r.a.createElement("div",{className:"middle",style:t.paused?{backgroundColor:"grey"}:{}},r.a.createElement("span",{id:"period"},t.phase),r.a.createElement("br",null),r.a.createElement("span",{id:"gameType"},"".concat(t.gameType,", ").concat(t.age,", ").concat(t.weight,"kg")),r.a.createElement("br",null),r.a.createElement("span",{id:"timer"},t.currentTime),r.a.createElement("br",null),r.a.createElement("button",{className:"timer",id:"startTimer",onClick:function(){var e=0;e="Junior Freestyle"===t.gameType?120:180,t.phase===N[0]&&t.playersSet?(n(Object(o.a)(Object(o.a)({},t),{},{phase:N[1],started:!0})),a.start({countdown:!0,startValues:{seconds:e}})):t.phase===N[2]&&t.started?(n(Object(o.a)(Object(o.a)({},t),{},{phase:N[3],paused:!1})),a.start({countdown:!0,startValues:{seconds:30}})):t.phase===N[4]&&t.started?(n(Object(o.a)(Object(o.a)({},t),{},{phase:N[5],paused:!1})),a.start({countdown:!0,startValues:{seconds:e}})):t.phase===N[6]&&t.started?(console.log("Match has ended"),B(l,t,a,c)):t.started&&!t.paused?(n(Object(o.a)(Object(o.a)({},t),{},{paused:!0})),a.pause()):t.started&&t.paused&&(n(Object(o.a)(Object(o.a)({},t),{},{paused:!1})),a.start())}},"Before Match"===t.phase?"\u25b6":t.paused?t.paused?"\u25b6":"bug":r.a.createElement(C.a,{icon:["fas","pause"]})))},S=function(e){var t=e.playerColour,a=e.matchPlayerInformation;return r.a.createElement("div",{className:"playerData "+t},r.a.createElement("span",{className:"firstName "+m(t)},a[t].firstName),r.a.createElement("br",null),r.a.createElement("span",{className:"lastName "+m(t)},a[t].lastName),r.a.createElement("br",null),r.a.createElement("span",{className:"clubName "+m(t)},a[t].clubName))},M=function(e){var t=e.playerColour,a=e.matchPlayerInformation,n=e.matchState,l=e.timer;return r.a.createElement("div",{className:"scorebox "+t},r.a.createElement("div",{className:"markerWarning "+m(t)},function(){for(var e=a[t].warnings,n="",r=0;r<e;r++)n+="\u25a0";return n}()),r.a.createElement("div",{className:"score "+m(t)},a[t].score),r.a.createElement("div",{className:"shotclock "+m(t),style:n.shotClockOn&&n.shotClockPlayer===t?{visibility:"visible"}:{}},l.getTotalTimeValues().seconds-n.shotClockSeconds))},B=function(e,t,a,n){var r=10;"Greco-Roman"===t.style?r=8:"Freestyle"===t.style&&(r=10),e.blue.score-e.red.score>=r?(a.pause(),n("blue","Technical Superiority")):e.red.score-e.blue.score>=r&&(a.pause(),n("red","Technical Superiority")),t.phase===N[6]&&(e.blue.score===e.red.score?(n("draw","Points"),console.log("Outcome is Draw")):e.blue.score-e.red.score>0?n("blue","Points"):n("red","Points"))},P=(a(27),function(e){var t=e.visibility,a=e.victoryState,n=e.SetVisibilityOf;return r.a.createElement("div",{style:t?{top:"0",left:"0",width:"100vw",height:"100vh",position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#8080807E"}:{display:"none"}},"draw"===a.playerColour?r.a.createElement("div",{className:"victoryScreenView",style:{backgroundColor:"black"}},r.a.createElement("p",null,"Draw!"),r.a.createElement("button",{onClick:function(){return n("victoryScreen",!1)}},"OK")):r.a.createElement("div",{className:"victoryScreenView",style:"red"===a.playerColour?{backgroundColor:"red"}:{backgroundColor:"blue"}},r.a.createElement("p",null,a.playerName," ",r.a.createElement("br",null)," wins by ",r.a.createElement("br",null)," ",a.reason),r.a.createElement("button",{onClick:function(){return n("victoryScreen",!1)}},"OK")))}),A={mainHeader:!0,navigation:!0,playerEntryView:!1,scoreboard:!0,victoryScreen:!1},T={red:{playerColor:"red",firstName:"firstName",lastName:"lastName",clubName:"clubName",warnings:0,score:0},blue:{playerColor:"blue",firstName:"firstName",lastName:"lastName",clubName:"clubName",warnings:0,score:0}},F={mat:"",age:"",gender:"",style:"",gameType:"",weight:0,currentTime:"0:00",playersSet:!1,started:!1,paused:!1,phase:"Before Match",shotClockOn:!1,shotClockSeconds:0,shotClockPlayer:"red"},V={playerName:"",playerColour:"",reason:""},I=function(){var e=Object(n.useState)(A),t=Object(i.a)(e,2),a=t[0],l=t[1],c=[a,l],s=Object(n.useState)(T),m=Object(i.a)(s,2),d=m[0],b=m[1],h=[d,b],p=Object(n.useState)(F),E=Object(i.a)(p,2),f=E[0],O=E[1],j=[f,O],C=Object(n.useState)(new u.a),N=Object(i.a)(C,1)[0],w=Object(n.useState)(V),S=Object(i.a)(w,2),M=S[0],B=S[1];return console.log(f),console.log(d),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{visibility:a.mainHeader}),r.a.createElement(v,{visibility:a.navigation,totalDisplayMethod:c,ResetCurrentMatch:function(){b(Object(o.a)({},T)),O(Object(o.a)({},F)),N.stop()}}),r.a.createElement(y,{visibility:a.playerEntryView,totalDisplayMethod:c,matchStateMethod:j,matchPlayerInformationMethod:h}),r.a.createElement(k,{visibility:a.scoreboard,matchPlayerInformationMethod:h,matchStateMethod:j,timer:N,Victory:function(e,t){var n=Object(o.a)({},d);l(Object(o.a)(Object(o.a)({},a),{},{victoryScreen:!0})),B("draw"===e?Object(o.a)(Object(o.a)({},M),{},{reason:t,playerColour:e,playerName:e}):Object(o.a)(Object(o.a)({},M),{},{reason:t,playerColour:e,playerName:"".concat(n[e].firstName," ").concat(n[e].lastName)}))}}),r.a.createElement(P,{visibility:a.victoryScreen,victoryState:M,SetVisibilityOf:function(e,t){var n=Object(o.a)({},a);n[e]=t,l(n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.dea6e39a.chunk.js.map