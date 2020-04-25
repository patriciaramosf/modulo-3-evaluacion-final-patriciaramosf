(this.webpackJsonpevaluacionfinal=this.webpackJsonpevaluacionfinal||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/rick_logo.75509f2e.png"},24:function(e,a,t){e.exports=t.p+"static/media/mistake.416ec287.png"},28:function(e,a,t){e.exports=t(40)},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(17),r=t.n(c),s=(t(33),t(18)),i=t(19),m=t(20),o=t(10),u=t(27),h=t(25),p=t(21),d=t.n(p),E=function(){return l.a.createElement("header",{className:"Header"},l.a.createElement("img",{alt:"Rick and Morty",className:"Header__image",src:d.a}))},f=function(e){var a=e.handleInputValue,t=e.inputValue;return l.a.createElement("div",{className:"Filter"},l.a.createElement("form",{className:"FilterForm"},l.a.createElement("input",{type:"text",value:t,name:"input",placeholder:"Find your favourite character",onChange:function(e){return a(e.currentTarget.value)},onSubmit:function(e){return e.preventDefault},className:"inputForm"}),l.a.createElement("label",null,l.a.createElement("i",{className:"fas fa-search"}))))},N=t(26),v=t(6),D=function(e){var a=e.chPhoto,t=e.chName,n=e.chSpecies,c=e.chGender,r=e.chStatus,s=e.chDetails,i=e.chId;return l.a.createElement("div",{className:"CharacterCard"},l.a.createElement("div",{className:"CharacterCard__Photo"},l.a.createElement("img",{alt:t,className:"chPhoto",src:a})),l.a.createElement("div",{className:"CharacterCard__Info"},l.a.createElement("h2",{className:"chName"},t),l.a.createElement("ul",{className:"chInfo"},l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitle"},"Species: "),n),l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitle"},"Gender: "),c),l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitle"},"Status: "),r)),l.a.createElement(v.b,{to:"/character/".concat(i)},l.a.createElement("p",{className:"moreInfo"},s)),l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fas ".concat("Alive"===r?"fa-chart-line":"fa-skull-crossbones")}))))},g=t(24),b=t.n(g),I=function(e){return l.a.createElement("div",{className:"CharacterError"},l.a.createElement("div",{className:"ceGeneral"},l.a.createElement("img",{alt:"rick error",className:"ceImg",src:b.a}),l.a.createElement("p",{className:"ceText"},"ERROR, ".concat(e.inputValue," doesn\xb4t exist!"))))},C=function(e){var a=e.totalData,t=e.inputValue,n=Object(N.a)(a).sort((function(e,a){return e.name.localeCompare(a.name)})).filter((function(e){return""===t||e.name.toLowerCase().includes(t.toLowerCase())}));return 0===n.length?l.a.createElement(I,{inputValue:t}):l.a.createElement("ul",{className:"CharacterList"},n.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(D,{chPhoto:e.image,chName:e.name,chSpecies:e.species,chGender:e.gender,chStatus:e.status,chDetails:"More details...",chId:e.id}))})))},S=function(e){var a=e.detailObj;return l.a.createElement("div",{className:"CharacterDetails__container"},l.a.createElement("div",{className:"CharacterDetails"},l.a.createElement("div",{className:"CharacterDetails__Photo"},l.a.createElement("img",{alt:a.name,className:"cdPhoto",src:a.image})),l.a.createElement("div",{className:"CharacterDetails__Info"},l.a.createElement("h2",{className:"cdName"},a.name),l.a.createElement("ul",{className:"cdInfo"},l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitleDetail"},"Species: "),a.species),l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitleDetail"},"Gender: "),a.gender),l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitleDetail"},"Status: "),a.status),l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitleDetail"},"Origin: "),a.origin.name),l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitleDetail"},"Last Location: "),a.location.name),l.a.createElement("li",null,l.a.createElement("span",{className:"infoTitleDetail"},"Episodes: "),a.episode.length))),l.a.createElement(v.b,{to:"/"},l.a.createElement("div",{className:"backTo"},l.a.createElement("i",{className:"fas fa-times"})))))},V=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()}))},k=(t(39),t(5)),y=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleInputValue=n.handleInputValue.bind(Object(o.a)(n)),n.showDetails=n.showDetails.bind(Object(o.a)(n)),n.state={totalData:[],inputValue:""},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=JSON.parse(localStorage.getItem("dataInput"));null!==a&&this.setState({inputValue:a}),V().then((function(a){e.setState({totalData:a.results})}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("dataInput",JSON.stringify(this.state.inputValue))}},{key:"handleInputValue",value:function(e){this.setState({inputValue:e})}},{key:"showDetails",value:function(e){var a,t=e.match.params.id,n=this.state.totalData,c=Object(s.a)(n);try{for(c.s();!(a=c.n()).done;){var r=a.value;if(r.id===parseInt(t))return l.a.createElement(S,{detailObj:r})}}catch(i){c.e(i)}finally{c.f()}}},{key:"render",value:function(){var e=this.state,a=e.totalData,t=e.inputValue;return l.a.createElement("div",{className:"App"},l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/"},l.a.createElement(E,null),l.a.createElement(f,{handleInputValue:this.handleInputValue,inputValue:t}),l.a.createElement(C,{totalData:a,inputValue:t})),l.a.createElement(k.a,{path:"/character/:id",render:this.showDetails})))}}]),t}(l.a.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v.a,null,l.a.createElement(y,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.dec51417.chunk.js.map