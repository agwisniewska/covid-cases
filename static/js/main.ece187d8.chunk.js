(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"e",(function(){return a.c})),n.d(t,"c",(function(){return a.a})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return r}));var r,a=n(25),c=n(1),o=n(15),i=n.n(o),s=n(28),u=n(8),d=n(2),j=n(0),l=n(29),b=n.n(l),f=n(30),O=function(e,t){switch(t.type){case r.INIT:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,isError:!1});case r.SUCCESS:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isError:!1,data:t.payload});case r.FAILURE:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isError:!0});default:throw new Error}},h=Object(j.createContext)(void 0),p=Object(j.createContext)(void 0),v=function(e){var t=e.children,n=Object(j.useReducer)(O,{isLoading:!1,isError:!1,data:null}),a=Object(u.a)(n,2),o=a[0],d=a[1];return Object(j.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:r.INIT}),e.prev=1,e.next=4,b.a.get(f.a.SUMMARY,{headers:{Authorization:"X-Access-Token5cf9dfd5-3449-485e-b5ae-70a60e997864"}});case 4:t=e.sent,d({type:r.SUCCESS,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d({type:r.FAILURE});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)(h.Provider,{value:o,children:Object(c.jsx)(p.Provider,{value:d,children:t})})},g=function(){var e=Object(j.useContext)(h);if(null==e)throw new Error("useCasesState must be used within a SearchProvider");return e};!function(e){e.INIT="INIT",e.SUCCESS="SUCCESS",e.FAILURE="FAILURE"}(r||(r={}))},213:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),o=n(76),i=n.n(o),s=(n(86),n(27)),u=n(3),d=n(31),j=function(){return Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:d.CovidCasesTable}),Object(r.jsx)(u.a,{path:"/table",component:d.CovidCasesTable}),Object(r.jsx)(u.a,{path:"/chart",component:d.CovidCasesChart})]})},l=n(11),b=function(){return Object(r.jsx)(s.a,{basename:"/covid-cases",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(l.a,{children:Object(r.jsx)(j,{})})})})},f=(n(213),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))});i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),f(console.log)},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return u}));var r=n(1),a=n(8),c=n(0),o=n.n(c),i=Object(c.createContext)(void 0),s=Object(c.createContext)(void 0),u=function(e){var t=e.children,n=Object(c.useState)(""),o=Object(a.a)(n,2),u=o[0],d=o[1];return Object(r.jsx)(i.Provider,{value:u,children:Object(r.jsx)(s.Provider,{value:d,children:t})})},d=function(){var e=Object(c.useContext)(i);if(null==e)throw new Error("useSearchState must be used within a SearchProvider");return e},j=function(){var e=o.a.useContext(s);if(null==e)throw new Error("useSearchDispatch must be used within a SearchProvider");return e}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),a=(n(0),n(3)),c=function(e){var t=e.title,n=e.path,c=Object(a.f)();return Object(r.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){c.push(n)},children:t})}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SUMMARY:"".concat("https://api.covid19api.com","/summary")}},31:function(e,t,n){"use strict";var r=n(47);n.o(r,"CovidCasesChart")&&n.d(t,"CovidCasesChart",(function(){return r.CovidCasesChart})),n.o(r,"CovidCasesTable")&&n.d(t,"CovidCasesTable",(function(){return r.CovidCasesTable}));var a=n(75);n.d(t,"CovidCasesChart",(function(){return a.a}));var c=n(74);n.d(t,"CovidCasesTable",(function(){return c.a}))},47:function(e,t){},74:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return U}));var r,a=function(e,t){return e.rows.reduce((function(e,n){return n.values[t]+e}),0)},c=n(1),o=n(0),i=n.n(o),s=n(26),u=n(2),d=n(32);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(r||(r={}));var j,l=function(e){var t=e.disabled,n=e.direction,a=e.onClick,i=e.children;return Object(c.jsxs)("button",{type:"button",disabled:t,onClick:a,children:[i||n!==r.LEFT?">":"<",i&&Object(c.jsx)(o.Fragment,{children:i})]})},b=function(e){var t=e.previousPage,n=e.nextPage,a=e.pageOptions,o=e.canNextPage,i=e.canPreviousPage,s=e.pageIndex;return Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)(l,{onClick:t,disabled:!i,direction:r.LEFT}),Object(c.jsx)(l,{onClick:n,disabled:!o,direction:r.RIGHT}),Object(c.jsxs)("span",{children:["Page",Object(c.jsxs)("strong",{children:[s+1," of ",a.length]})," "]})]})},f=n(8),O=n(15),h=n.n(O),p=n(28),v=n(29),g=n.n(v);!function(e){e.INIT="INIT",e.SUCCESS="SUCCESS",e.FAILURE="FAILURE"}(j||(j={}));var C=function(e,t){switch(t.type){case j.INIT:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0,isError:!1});case j.SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,isError:!1,data:t.payload});case j.FAILURE:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,isError:!0});default:throw new Error}},x=n(79),m=n.n(x),S=n(25),w=n(30),E=function(e){return Object(c.jsx)("div",{className:"input-group mb-3",children:Object(c.jsx)("input",Object(u.a)(Object(u.a)({},e),{},{onChange:function(t){e.onChange(t,{newValue:t.target.value,method:"type"})},type:"text",className:"form-control","aria-label":"Country","aria-describedby":"inputGroup-sizing-default"}))})},F=function(e){var t=e.containerProps,n=e.children;e.query;return n?Object(c.jsx)("ul",Object(u.a)(Object(u.a)({},t),{},{className:"list-group",children:Object(c.jsxs)("li",{className:"list-group-item",children:[" ",n," "]})})):null},P=function(){var e=function(e,t){var n=Object(o.useState)(e),r=Object(f.a)(n,2),a=r[0],c=r[1],i=Object(o.useReducer)(C,{isLoading:!1,isError:!1,data:t}),s=Object(f.a)(i,2),u=s[0],d=s[1];return Object(o.useEffect)((function(){!function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:j.INIT}),e.prev=1,e.next=4,g.a.get(a,{headers:{Authorization:"X-Access-Token5cf9dfd5-3449-485e-b5ae-70a60e997864"}});case 4:t=e.sent,d({type:j.SUCCESS,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d({type:j.FAILURE});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),[u,c]}(w.a.SUMMARY,[]),t=Object(f.a)(e,1)[0].data,n=Object(o.useState)([]),r=Object(f.a)(n,2),a=r[0],i=r[1],s=Object(o.useState)([]),u=Object(f.a)(s,2),d=u[0],l=u[1],b=Object(o.useState)(""),O=Object(f.a)(b,2),v=O[0],x=O[1],P=Object(S.b)();Object(o.useEffect)((function(){if(t&&t.Countries){var e=t.Countries.map((function(e){return e.Country}));l(e),i(e)}}),[t]);var I={placeholder:"Type a country",value:v,onChange:function(e,t){var n=t.newValue;e.preventDefault(),x(n),""===n&&P(n)}};return Object(c.jsx)(m.a,{suggestions:d,onSuggestionsFetchRequested:function(e){var t=e.value;e.reason;l(function(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:a.filter((function(e){return e.toLowerCase().slice(0,n)===t}))}(t))},getSuggestionValue:function(e){return e},renderSuggestion:function(e){return Object(c.jsx)("div",{children:e})},onSuggestionSelected:function(e,t){t.suggestion;var n=t.suggestionValue;P(n),x(n)},onSuggestionsClearRequested:function(){return l([])},renderInputComponent:E,renderSuggestionsContainer:F,inputProps:I})},I=n(11),N=function(e){var t=e.column.setFilter,n=Object(I.e)();return Object(o.useEffect)((function(){t(n)}),[n]),Object(c.jsx)(P,{})},T=function(e){var t=e.columns,n=e.data,r=i.a.useMemo((function(){return{Header:"",Filter:N}}),[]),a=Object(d.useTable)({columns:t,data:n,defaultColumn:r,initialState:{pageIndex:0,pageSize:20}},d.useFilters,d.usePagination),o=a.getTableProps,s=a.getTableBodyProps,j=a.headerGroups,l=a.prepareRow,f=a.footerGroups,O=a.page,h=a.canPreviousPage,p=a.canNextPage,v=a.pageOptions,g=a.nextPage,C=a.previousPage,x=a.state,m={canPreviousPage:h,canNextPage:p,pageOptions:v,nextPage:g,previousPage:C,pageIndex:x.pageIndex,pageSize:x.pageSize};return Object(c.jsxs)(I.c,{children:[Object(c.jsxs)("table",Object(u.a)(Object(u.a)({className:"table"},o()),{},{children:[Object(c.jsx)("thead",{className:"thead-light",children:j.map((function(e){return Object(c.jsx)("tr",Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(u.a)(Object(u.a)({scope:"col"},e.getHeaderProps()),{},{children:[e.render("Header"),Object(c.jsx)("div",{children:e.canFilter&&"Country"===e.Header?e.render("Filter"):null})]}))}))}))}))}),Object(c.jsx)("tbody",Object(u.a)(Object(u.a)({},s()),{},{children:O.map((function(e,t){return l(e),Object(c.jsx)("tr",Object(u.a)(Object(u.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(u.a)(Object(u.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:f.map((function(e){return Object(c.jsx)("tr",Object(u.a)(Object(u.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(u.a)(Object(u.a)({},e.getFooterProps()),{},{children:e.render("Footer")}))}))}))}))})]})),Object(c.jsx)(b,Object(u.a)({},m))]})},y=n(80),R=function(e){e.header;var t=Object(y.a)(e,["header"]);return Object(c.jsx)(o.Fragment,{children:Object(c.jsx)(T,Object(u.a)({},t))})},L=function(){var e=Object(I.d)(),t=e.data,n=(e.isError,e.isLoading,i.a.useMemo((function(){return U}),[])),r=i.a.useMemo((function(){if(t)return t.Countries}),[t]);return Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)(s.a,{path:"/chart",title:"View Chart"}),r&&r.length>0&&Object(c.jsx)(R,{columns:n,data:r})]})},U=[{Header:"Country",accessor:"Country"},{Header:"Deaths",accessor:"NewDeaths",Footer:function(e){var t=i.a.useMemo((function(){return a(e,"NewDeaths")}),[e.filteredRows]);return Object(c.jsxs)(c.Fragment,{children:["Total: ",Object(c.jsx)("div",{children:t})]})}},{Header:"Recovered",accessor:"NewRecovered",Footer:function(e){var t=i.a.useMemo((function(){return a(e,"NewRecovered")}),[e.filteredRows]);return Object(c.jsxs)(c.Fragment,{children:["Total: ",Object(c.jsx)("div",{children:t})]})}},{Header:"New Cases",accessor:"NewConfirmed",Footer:function(e){var t=i.a.useMemo((function(){return a(e,"NewConfirmed")}),[e.filteredRows]);return Object(c.jsxs)(c.Fragment,{children:["Total: ",Object(c.jsx)("div",{children:t})]})}}]},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(1),a=n(0),c=n(11),o=n(77),i=function(e){var t=e.data;return Object(r.jsx)(o.Bar,{data:t,width:1e3,height:1e3,options:{maintainAspectRatio:!1,responsive:!0}})},s=n(26),u=function(){var e=Object(c.d)(),t=e.data;e.isError,e.isLoading;return Object(a.useEffect)((function(){if(t&&t.Countries&&t.Countries.length>0){var e=t.Countries.map((function(e){return e.Country}));d.labels=e,t.Countries.forEach((function(e){d.datasets[0].data.push(e.NewConfirmed),d.datasets[1].data.push(e.NewDeaths),d.datasets[2].data.push(e.NewRecovered)}))}}),[t]),console.log("datasets",d),Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(s.a,{title:"View Table",path:"/"}),Object(r.jsx)(i,{data:d})]})},d={labels:[],datasets:[{label:"New Cases",data:[],backgroundColor:"#FFFF00",width:5},{label:"New Deaths",data:[],backgroundColor:"#FF0000",width:5},{label:"New Recovered",data:[],backgroundColor:"#74B649",width:5}]}}},[[214,1,2]]]);
//# sourceMappingURL=main.ece187d8.chunk.js.map