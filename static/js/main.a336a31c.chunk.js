(this["webpackJsonpconnect-four-react"]=this["webpackJsonpconnect-four-react"]||[]).push([[0],{12:function(e,r,t){},13:function(e,r,t){},15:function(e,r,t){"use strict";t.r(r);var n=t(1),s=t.n(n),i=t(7),a=t.n(i),u=(t(12),t.p,t(13),t(2)),c=t(3),d=t(5),h=t(4),o=t(0);function l(e){return Object(o.jsx)("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.value},children:e.value})}var q=function(e){Object(d.a)(t,e);var r=Object(h.a)(t);function t(){return Object(u.a)(this,t),r.apply(this,arguments)}return Object(c.a)(t,[{key:"renderSquare",value:function(e){var r=this;return Object(o.jsx)(l,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)}})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"border-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6)]}),Object(o.jsxs)("div",{className:"border-row",children:[this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13)]}),Object(o.jsxs)("div",{className:"border-row",children:[this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20)]}),Object(o.jsxs)("div",{className:"border-row",children:[this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27)]}),Object(o.jsxs)("div",{className:"border-row",children:[this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34)]}),Object(o.jsxs)("div",{className:"border-row",children:[this.renderSquare(35),this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41)]})]})}}]),t}(n.Component),j=function(e){Object(d.a)(t,e);var r=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=r.call(this,e)).state={redNext:!0,stepNumber:0,history:[{squares:Array(42).fill(null)}]},n}return Object(c.a)(t,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,redNext:e%2===0})}},{key:"handleClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1].squares.slice();S(t)||t[e]||(t[e]=this.state.redNext?"red":"yellow",this.setState({history:r.concat({squares:t}),redNext:!this.state.redNext,stepNumber:r.length}))}},{key:"render",value:function(){var e,r=this,t=this.state.history,n=t[this.state.stepNumber],s=S(n.squares),i=t.map((function(e,t){var n=t?"Go to #"+t:"Start the Game";return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){r.jumpTo(t)},children:n})},t)}));return e=s?"Winner is "+s:"Next Player is "+(this.state.redNext?"Red":"Yellow"),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(q,{onClick:function(e){return r.handleClick(e)},squares:n.squares})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{children:e}),Object(o.jsx)("ul",{children:i})]})]})}}]),t}(n.Component);function S(e){for(var r=0;r<42;r++)if(r<4||6<r<11||13<r<18||20<r<25||27<r<32||34<r<39){var t=r,n=r+1,s=r+2,i=r+3;if(e[t]&&e[t]===e[n]&&e[n]===e[s]&&e[s]===e[i])return e[t]}for(var a=0;a<21;a++){var u=a,c=a+7,d=a+14,h=a+21;if(e[u]&&e[u]===e[c]&&e[c]===e[d]&&e[d]===e[h])return e[u]}return null}var b=function(){return Object(o.jsx)(j,{})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(r){var t=r.getCLS,n=r.getFID,s=r.getFCP,i=r.getLCP,a=r.getTTFB;t(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.a336a31c.chunk.js.map