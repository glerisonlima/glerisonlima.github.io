(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(28)},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getClientes",function(){return v}),n.d(a,"addCliente",function(){return O}),n.d(a,"updateCliente",function(){return C}),n.d(a,"removeCliente",function(){return j}),n.d(a,"setClienteParaAlterar",function(){return y}),n.d(a,"setOrdenacao",function(){return N}),n.d(a,"setPesquisa",function(){return g});var r=n(0),l=n.n(r),c=n(11),o=n.n(c),i=(n(23),n(1)),u=n(2),s=n(4),m=n(3),p=n(5),E=n(6),d=n(7),f=function(){return(new Date).getTime()},b=function(e){var t=Math.floor(1e5*Math.random()+1e5),n=f(),a=f();return Object(d.a)({},e,{id:t,criadoEm:n,atualizadoEm:a})},h=[{id:1,nome:"Jo\xe3o",cpf:"111.222.333-45",telefone:"2222-3333",email:"joao@gmail.com",criadoEm:f(),atualizadoEm:f()}],v=function(){return{type:"GET_CLIENTES",data:h}},O=function(e){return{type:"ADD_CLIENTE",cliente:b(e)}},C=function(e,t){return{type:"UPDATE_CLIENTE",cliente:Object(d.a)({id:e},t,{atualizadoEm:f()})}},j=function(e){return{type:"REMOVE_CLIENTE",id:e}},y=function(e){return{type:"SET_CLIENTE",cliente:e}},N=function(e){return{type:"SET_ORDENACAO",ordenacao:e.target.value}},g=function(e){return{type:"SET_PESQUISA",pesquisa:e.target.value}},A=function(e){return l.a.createElement("div",{className:"input"},e.label&&l.a.createElement("label",null,e.label),l.a.createElement("input",{value:e.value,onChange:e.onChange,placeholder:e.placeholder,type:e.type||"text"}),e.erro&&l.a.createElement("small",null,e.erro))},T={form:{nome:"",telefone:"",cpf:"",email:""},erros:{},mostrarForm:!1},S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=T,n.mostrarForm=function(){n.setState({mostrarForm:!n.state.mostrarForm})},n.validar=function(){var e=n.state.form,t={};return["nome","telefone","cpf","email"].forEach(function(n){e[n]||(t[n]="Digite o "+n)}),n.setState({erros:t}),0===Object.keys(t).length},n.onChange=function(e,t){var a=n.state.form;a[e]=t.target.value,n.setState({form:a},function(){n.validar()})},n.handleSubmit=function(){if(!n.validar())return null;var e=n.state.form;n.props.cliente?n.props.updateCliente(n.props.cliente.id,e):n.props.addCliente(e),n.setState(T)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillUpdate",value:function(e){!this.props.cliente&&e.cliente&&this.setState({form:e.cliente,erros:{},mostrarForm:!0}),this.props.cliente&&!e.cliente&&this.setState(T)}},{key:"renderFormulario",value:function(){var e=this,t=this.state,n=t.form,a=t.erros;return l.a.createElement("div",{className:"formulario"},l.a.createElement("div",null,l.a.createElement(A,{value:n.nome,onChange:function(t){return e.onChange("nome",t)},placeholder:"Nome",erro:a.nome}),l.a.createElement(A,{value:n.telefone,onChange:function(t){return e.onChange("telefone",t)},placeholder:"Telefone",erro:a.telefone}),l.a.createElement(A,{value:n.cpf,onChange:function(t){return e.onChange("cpf",t)},placeholder:"Cpf",erro:a.cpf}),l.a.createElement(A,{value:n.email,onChange:function(t){return e.onChange("email",t)},placeholder:"Email",erro:a.email,type:"email"}),l.a.createElement("button",{onClick:this.handleSubmit,className:"botao botao-verde"},"Salvar"),l.a.createElement("button",{onClick:this.mostrarForm,className:"botao botao-vermelho"},"Cancelar")))}},{key:"renderBotao",value:function(){return l.a.createElement("div",{className:"formulario"},l.a.createElement("button",{onClick:this.mostrarForm,className:"botao botao-azul"},"+ ADICIONAR CLIENTE"))}},{key:"render",value:function(){return this.state.mostrarForm?this.renderFormulario():this.renderBotao()}}]),t}(r.Component),k=Object(E.b)(function(e){return{cliente:e.clientes.cliente}},a)(S),q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={iniciouExclusao:!1},n.excluirCliente=function(){if(!n.state.iniciouExclusao)return n.setState({iniciouExclusao:!0});n.props.removeCliente(n.props.cliente.id)},n.alterarCliente=function(){n.props.setClienteParaAlterar(n.props.cliente)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.cliente,t=this.state.iniciouExclusao;return l.a.createElement("tr",null,l.a.createElement("td",null,e.nome),l.a.createElement("td",null,e.telefone),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.cpf),l.a.createElement("td",{className:"btn botao-azul-tabela",onClick:this.alterarCliente,style:{cursor:"pointer"}},"Alterar"),l.a.createElement("td",{className:"btn botao-vermelho-tabela",onClick:this.excluirCliente,style:{cursor:"pointer"}},t?"Certeza?":"Excluir"))}}]),t}(r.Component),I=Object(E.b)(null,a)(q),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).ordenacao=function(e,t){var a=n.props.ordenacao;return"a-z"===a?e.nome.localeCompare(t.nome):"z-a"===a?-1*e.nome.localeCompare(t.nome):"criacao"===a?new Date(e.criadoEm)-new Date(t.criadoEm):void 0},n.pesquisa=function(e){var t=e.nome,a=e.endereco,r=e.email,l=e.cpf,c=n.props.pesquisa;return!c||[t,a,r,l].join(";").includes(c)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getClientes()}},{key:"render",value:function(){var e=this.props.clientes;return l.a.createElement("div",{className:"ListaClientes"},l.a.createElement("hr",null),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"Telefone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Cpf"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,(e||[]).filter(this.pesquisa).sort(this.ordenacao).map(function(e,t){return l.a.createElement(I,{cliente:e,key:e.id})}))))}}]),t}(r.Component),L=Object(E.b)(function(e){return{clientes:e.clientes.clientes,ordenacao:e.clientes.ordenacao,pesquisa:e.clientes.pesquisa}},a)(D),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.ordenacao;return l.a.createElement("div",{className:"ordenacao"},l.a.createElement("label",null,"Ordenar por: "),l.a.createElement("select",{value:e||"a-z",onChange:this.props.setOrdenacao},l.a.createElement("option",{value:"a-z"},"Alfab\xe9tica de A-Z"),l.a.createElement("option",{value:"z-a"},"Alfab\xe9tica de Z-A"),l.a.createElement("option",{value:"criacao"},"Data de Cria\xe7\xe3o")))}}]),t}(r.Component),w=Object(E.b)(function(e){return{ordenacao:e.clientes.ordenacao}},a)(_),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pesquisa,n=e.setPesquisa;return l.a.createElement("div",{className:"pesquisa"},l.a.createElement("input",{value:t,onChange:n,placeholder:"Pesquise aqui..."}))}}]),t}(r.Component),F=Object(E.b)(function(e){return{pesquisa:e.clientes.pesquisa}},a)(z),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Listagem"},l.a.createElement("div",{className:"Header"},l.a.createElement("h2",null,"Lista de Clientes")),l.a.createElement("hr",null),l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement(P,null),l.a.createElement("br",null),l.a.createElement(L,null))}}]),t}(r.Component),P=function(){return l.a.createElement("div",{className:"Opcoes"},l.a.createElement("div",null,l.a.createElement(F,null)),l.a.createElement("div",null,l.a.createElement(w,null)))},M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Aplicacao"},l.a.createElement(x,null))}}]),t}(r.Component),R=n(10),U=Object(R.b)({clientes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{ordenacao:"a-z"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CLIENTES":return Object(d.a)({},e,{clientes:t.data});case"ADD_CLIENTE":return Object(d.a)({},e,{clientes:e.clientes.concat([t.cliente])});case"UPDATE_CLIENTE":return Object(d.a)({},e,{cliente:null,clientes:e.clientes.map(function(e){return e.id===t.cliente.id?t.cliente:e})});case"REMOVE_CLIENTE":return Object(d.a)({},e,{clientes:e.clientes.filter(function(e){return e.id!==t.id})});case"SET_ORDENACAO":return Object(d.a)({},e,{ordenacao:t.ordenacao});case"SET_PESQUISA":return Object(d.a)({},e,{pesquisa:t.pesquisa});case"SET_CLIENTE":return Object(d.a)({},e,{cliente:t.cliente});default:return e}}}),B=Object(R.c)(U),J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{store:B},l.a.createElement("div",{className:"App"},l.a.createElement(M,null)))}}]),t}(r.Component);o.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ab9defb7.chunk.js.map