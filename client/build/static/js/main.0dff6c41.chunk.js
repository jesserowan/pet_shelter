(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(21),c=a.n(s),r=(a(31),a(5)),o=a(6),i=a(8),m=a(7),p=a(9),u=(a(32),a(10)),h=a.n(u),d=a(56),E=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("tr",{className:"single-pet"},l.a.createElement("td",null,this.props.pet.name),l.a.createElement("td",null,this.props.pet.species),l.a.createElement("td",{className:"colwidth0"},l.a.createElement(d.a,{className:"btn btn-outline-secondary",to:"/pet/"+this.props.pet._id},"Details"),l.a.createElement(d.a,{className:"btn btn-outline-secondary",to:"/pets/"+this.props.pet._id+"/edit"},"Edit")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){h.a.get("http://localhost:8000/pets").then(function(e){a.setState({pets:e.data.pets})}).catch(function(e){console.log(e)})},a.state={pets:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"table-div"},l.a.createElement("table",{className:"table table-striped table-light"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Species"),l.a.createElement("th",{className:"colwidth0"},"Actions"))),l.a.createElement("tbody",null,this.state.pets.map(function(e){return l.a.createElement(E,{key:e._id,pet:e})}))))}}]),t}(n.Component),f=a(3),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){h.a.get("http://localhost:8000/pets").then(function(e){a.setState({allPets:e.data.pets})}).catch(function(e){console.log(e)})},a.handleName=function(e){var t=Object(f.a)({},a.state.pet);t.name=e.target.value,a.setState({pet:t})},a.handleSpecies=function(e){var t=Object(f.a)({},a.state.pet);t.species=e.target.value,a.setState({pet:t})},a.handleDescription=function(e){var t=Object(f.a)({},a.state.pet);t.description=e.target.value,a.setState({pet:t})},a.handleFirstSkill=function(e){var t=Object(f.a)({},a.state.pet);t.skills[0]=e.target.value,a.setState({pet:t})},a.handleSecondSkill=function(e){var t=Object(f.a)({},a.state.pet);t.skills[1]=e.target.value,a.setState({pet:t})},a.handleThirdSkill=function(e){var t=Object(f.a)({},a.state.pet);t.skills[2]=e.target.value,a.setState({pet:t})},a.handleSubmit=function(e){e.preventDefault(),h.a.post("http://localhost:8000/pets",a.state.pet).then(function(e){"not ok"===e.data.status?(console.log(e),a.setState({errors:e.data.errors.errors})):(a.props.history.push("/"),console.log(e))}).catch(function(e){console.log(e)})},a.state={pet:{name:"",species:"",description:"",skills:["","",""]},errors:{name:"",species:"",description:"",duplicate:""},allPets:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.pet,t=e.name,a=e.species,n=e.description;return l.a.createElement("div",{className:"form-div"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Name"),l.a.createElement("input",{className:"form-control",type:"text",value:t,onChange:this.handleName}),l.a.createElement("p",null,this.state.errors.name?l.a.createElement("span",{className:"error"},this.state.errors.name.message):l.a.createElement("span",null))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Species"),l.a.createElement("input",{className:"form-control",type:"text",value:a,onChange:this.handleSpecies}),l.a.createElement("p",null,this.state.errors.species?l.a.createElement("span",{className:"error"},this.state.errors.species.message):l.a.createElement("span",null))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("input",{className:"form-control",type:"text",value:n,onChange:this.handleDescription}),l.a.createElement("p",null,this.state.errors.description?l.a.createElement("span",{className:"error"},this.state.errors.description.message):l.a.createElement("span",null))),l.a.createElement("div",{className:"form-group"},l.a.createElement("hr",null),l.a.createElement("label",null,"Skills (optional)"),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 1"),l.a.createElement("input",{className:"form-control inline",type:"text",onChange:this.handleFirstSkill}),l.a.createElement("label",null,"Skill 2"),l.a.createElement("input",{className:"form-control inline",type:"text",onChange:this.handleSecondSkill}),l.a.createElement("label",null,"Skill 3"),l.a.createElement("input",{className:"form-control inline",type:"text",onChange:this.handleThirdSkill})),l.a.createElement("input",{type:"submit",className:"btn btn-outline-primary"})))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){console.log(a.props.match.params._id),h.a.get("http://localhost:8000/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})}).catch(function(e){console.log(e)})},a.like=function(e){var t=a.state.pet;t.likes++,a.setState({pet:t}),h.a.put("http://localhost:8000/pets/".concat(a.props.match.params._id,"/like"),a.state.pet).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),a.refs.btn.setAttribute("disabled","disabled")},a.adopt=function(e){var t=a.props.match.params._id;h.a.delete("http://localhost:8000/pets/".concat(t)).then(function(e){a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={pet:{name:"",species:"",description:"",skills:[],likes:0}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="";for(var t in this.state.pet.skills)""!==this.state.pet.skills[t]&&(e+=this.state.pet.skills[t],e+=", ");return l.a.createElement("div",{className:"table-div"},l.a.createElement("table",{className:"table table-light table-striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"colwidth1"},"Name:"),l.a.createElement("td",null,this.state.pet.name)),l.a.createElement("tr",null,l.a.createElement("td",{className:"colwidth1"},"Species:"),l.a.createElement("td",null,this.state.pet.species)),l.a.createElement("tr",null,l.a.createElement("td",{className:"colwidth1"},"Description:"),l.a.createElement("td",null,this.state.pet.description)),l.a.createElement("tr",null,l.a.createElement("td",{className:"colwidth1"},"Skills:"),l.a.createElement("td",null,e)),l.a.createElement("tr",null,l.a.createElement("td",{className:"colwidth1"},"Likes"),l.a.createElement("td",null,this.state.pet.likes)))),l.a.createElement("button",{ref:"btn",className:"btn btn-outline-primary",onClick:this.like},"Like"),l.a.createElement("button",{className:"btn btn-outline-primary",onClick:this.adopt},"Adopt"))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){console.log(a.props.match.params._id),h.a.get("http://localhost:8000/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({oldPet:e.data.pet,newPet:e.data.pet})}).catch(function(e){console.log(e)})},a.handleName=function(e){var t=Object(f.a)({},a.state.newPet);t.name=e.target.value,a.setState({newPet:t})},a.handleSpecies=function(e){var t=Object(f.a)({},a.state.newPet);t.species=e.target.value,a.setState({newPet:t})},a.handleDescription=function(e){var t=Object(f.a)({},a.state.newPet);t.description=e.target.value,a.setState({newPet:t})},a.handleFirstSkill=function(e){var t=Object(f.a)({},a.state.newPet);t.skills[0]=e.target.value,a.setState({newPet:t})},a.handleSecondSkill=function(e){var t=Object(f.a)({},a.state.newPet);t.skills[1]=e.target.value,a.setState({newPet:t})},a.handleThirdSkill=function(e){var t=Object(f.a)({},a.state.newPet);t.skills[2]=e.target.value,a.setState({newPet:t})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.newPet),h.a.put("http://localhost:8000/pets/".concat(a.props.match.params._id),a.state.newPet).then(function(e){"not ok"===e.data.status?(console.log(e),a.setState({errors:e.data.errors.errors})):(a.props.history.push("/pet/".concat(a.props.match.params._id)),console.log(e))}).catch(function(e){console.log(e)})},a.cancel=function(e){a.props.history.push("/")},a.state={newPet:{name:"",species:"",description:"",skills:["","",""]},oldPet:{name:"",species:"",description:"",skills:["","",""]},errors:{name:"",species:"",description:""}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.newPet,t=e.name,a=e.species,n=e.description;return l.a.createElement("div",{className:"form-div"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Name"),l.a.createElement("input",{className:"form-control",type:"text",value:t,onChange:this.handleName}),l.a.createElement("p",null,this.state.errors.name?l.a.createElement("span",{className:"error"},this.state.errors.name.message):l.a.createElement("span",null))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Species"),l.a.createElement("input",{className:"form-control",type:"text",value:a,onChange:this.handleSpecies}),l.a.createElement("p",null,this.state.errors.species?l.a.createElement("span",{className:"error"},this.state.errors.species.message):l.a.createElement("span",null))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("input",{className:"form-control",type:"text",value:n,onChange:this.handleDescription}),l.a.createElement("p",null,this.state.errors.description?l.a.createElement("span",{className:"error"},this.state.errors.description.message):l.a.createElement("span",null))),l.a.createElement("div",{className:"form-group"},l.a.createElement("hr",null),l.a.createElement("label",null,"Skills (optional)"),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 1"),l.a.createElement("input",{className:"form-control inline",type:"text",value:this.state.oldPet.skills[0],onChange:this.handleFirstSkill}),l.a.createElement("label",null,"Skill 2"),l.a.createElement("input",{className:"form-control inline",type:"text",value:this.state.oldPet.skills[1],onChange:this.handleSecondSkill}),l.a.createElement("label",null,"Skill 3"),l.a.createElement("input",{className:"form-control inline",type:"text",value:this.state.oldPet.skills[2],onChange:this.handleThirdSkill})),l.a.createElement("input",{type:"submit",className:"btn btn-outline-primary"}),l.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.cancel},"Cancel")))}}]),t}(n.Component),N=a(57),S=a(58),j=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement("h2",null,"These pets are looking for a home!")),l.a.createElement(N.a,null,l.a.createElement("div",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(d.a,{className:"btn btn-outline-secondary bottom-margin",to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.a,{className:"btn btn-outline-secondary bottom-margin",to:"/pets/new"},"Add a Pet"))),l.a.createElement(S.a,{exact:!0,path:"/",component:b}),l.a.createElement(S.a,{path:"/pets/new",component:v}),l.a.createElement(S.a,{exact:!0,path:"/pet/:_id",component:g}),l.a.createElement(S.a,{path:"/pets/:_id/edit",component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.0dff6c41.chunk.js.map