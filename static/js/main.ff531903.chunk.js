(this.webpackJsonpdashboard2=this.webpackJsonpdashboard2||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=a(2),i=a.n(o),u=a(5),d=a(16),l=a(17),h=a(3),v=a(18),m=a(19),p=a(4),f=a.n(p),b=(a(43),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={confirmed:0,recovered:0,deaths:0,countries:[]},n.getCountryData=n.getCountryData.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://covid19.mathdro.id/api");case 2:return t=e.sent,e.next=5,f.a.get("https://covid19.mathdro.id/api/countries");case 5:for(a=e.sent,n=[],r=0;r<a.data.countries.length;r++)n.push(a.data.countries[r].name);this.setState({confirmed:t.data.confirmed.value,recovered:t.data.recovered.value,deaths:t.data.deaths.value,countries:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountryData",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://covid19.mathdro.id/api/countries/".concat(t.target.value));case 3:a=e.sent,this.setState({confirmed:a.data.confirmed.value,recovered:a.data.recovered.value,deaths:a.data.deaths.value}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),404===e.t0.response.status&&this.setState({confirmed:"No data available",recovered:"No data available",deaths:"No data available"});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderCountryOptions",value:function(){return this.state.countries.map((function(e,t){return r.a.createElement("option",{key:e},e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Corona update"),r.a.createElement("select",{className:"dropDown",onChange:this.getCountryData},this.renderCountryOptions()),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"box confirmed"},r.a.createElement("h3",null,"Confirmed cases: "),r.a.createElement("h4",null,this.state.confirmed)),r.a.createElement("div",{className:"box recovered"},r.a.createElement("h3",null,"Recovered cases: "),r.a.createElement("h4",null,this.state.recovered)),r.a.createElement("div",{className:"box deaths"},r.a.createElement("h3",null,"In another world cases: "),r.a.createElement("h4",null,this.state.deaths))))}}]),a}(r.a.Component));s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ff531903.chunk.js.map