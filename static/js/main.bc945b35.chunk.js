(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__OydgA",modal:"Modal_modal__2n9nc",left:"Modal_left__27MtI",right:"Modal_right__7oPEp"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2E3Fw",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__2kjNM"}},13:function(e,t,a){e.exports={Buttonwrapp:"Button_Buttonwrapp__39WZr",Button:"Button_Button__2fXdf"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3ixqg"}},17:function(e,t,a){e.exports={loader:"Loader_loader__3m-CN"}},18:function(e,t,a){e.exports={hero:"Initial_hero__2g7iA"}},19:function(e,t,a){e.exports={notfoundwrapper:"NotFound_notfoundwrapper__17PK8"}},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),s=(a(24),a(3)),i=a(4),l=a(6),u=a(5),h=a(8),m=a(9),d=a.n(m),p=a(1),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleInputChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):h.c.error("Cannot send empty request",{position:"top-left",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:d.a.Searchbar,children:Object(p.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:d.a.SearchForm_button}),Object(p.jsx)("input",{className:d.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleInputChange})]})})}}]),a}(r.Component),b=(a(26),a(14)),j=a(12),f=a.n(j);function y(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,n=e.onClick,o=e.ref,c=void 0===o?null:o;return Object(p.jsx)("li",{className:f.a.ImageGalleryItem,ref:c,children:Object(p.jsx)("img",{className:f.a.ImageGalleryItem_image,src:t,alt:r,"data-source":a,onClick:n})})}var O=a(15),v=a.n(O),_=a(10),w=a.n(_),S=document.querySelector("#modal-root"),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={sourceImg:""},e.handlekeyDown=function(t){"Escape"===t.code&&e.props.onClose(),"ArrowLeft"===t.key&&e.props.onArrowLeft(),"ArrowRight"===t.key&&e.props.onArrowRight()},e.handleLeft=function(t){e.props.onArrowLeft()},e.handleRight=function(t){e.props.onArrowRight()},e.handleBackDropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlekeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlekeyDown)}},{key:"render",value:function(){var e=this,t=this.props.imageModal;return Object(o.createPortal)(Object(p.jsx)("div",{className:w.a.overlay,onClick:this.handleBackDropClick,children:Object(p.jsxs)("div",{className:w.a.modal,children:[Object(p.jsx)("button",{className:w.a.left,type:"button",onClick:function(){return e.handleLeft()}}),Object(p.jsx)("img",{src:t,alt:""}),Object(p.jsx)("button",{className:w.a.right,type:"button",onClick:function(){return e.handleRight()}})]})}),S)}}]),a}(r.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1,imageModal:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClick=function(t){e.setState({imageModal:t.target.dataset.source}),e.toggleModal()},e.onArrowRight=function(){var t=e.props.images.map((function(e){return e.largeImageURL})),a=t.indexOf(e.state.imageModal);a+1>t.length-1&&(a=-1),e.setState({imageModal:t[a+1]})},e.onArrowLeft=function(){var t=e.props.images.map((function(e){return e.largeImageURL})),a=t.indexOf(e.state.imageModal);0===a&&(a=t.length),e.setState({imageModal:t[a-1]})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images,a=this.state,r=a.showModal,n=a.imageModal;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:v.a.ImageGallery,children:t.map((function(t){var a=t.id,r=t.webformatURL,n=t.largeImageURL,o=t.tags;return Object(p.jsx)(y,{webformatURL:r,largeImageURL:n,tags:o,onClick:e.handleClick},a)}))}),r&&Object(p.jsx)(x,{imageModal:n,onClose:this.toggleModal,onArrowRight:this.onArrowRight,onArrowLeft:this.onArrowLeft})]})}}]),a}(r.Component),I=(a(27),a(16)),C=a.n(I),L=a(17),M=a.n(L),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(C.a,{className:M.a.loader,type:"Bars",color:"#3f51b5",height:90,width:90})}}]),a}(r.Component),N=a(18),F=a.n(N);a.p;function R(){return Object(p.jsx)("div",{className:F.a.hero,children:Object(p.jsx)("h1",{children:"Lets search some pictures"})})}var B=a(13),G=a.n(B);function E(e){var t=e.onClick;return Object(p.jsx)("div",{className:G.a.Buttonwrapp,children:Object(p.jsx)("button",{className:G.a.Button,type:"button",onClick:t,children:"Load more"})})}var q=a(19),D=a.n(q);function U(e){var t=e.onError;return Object(p.jsx)("div",{className:D.a.notfoundwrapper,children:Object(p.jsx)("h1",{children:t})})}var P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={page:1,images:[],error:null,status:"idle"},e.onScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth",block:"end"})},e.resetImages=function(){e.setState({images:[],page:1})},e.handleLoadmoreButton=function(){e.setState((function(e){return{page:e.page+1}})),e.onScroll()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.searchQuery,r=this.props.searchQuery,n=t.page,o=this.state.page;a!==r&&(this.resetImages(),this.onSearch(),this.setState({status:"pending"})),n!==o&&(this.onSearch(),this.setState({status:"pending"}))}},{key:"onSearch",value:function(){var e=this;this.setState({status:"pending"});var t=this.state.page,a=this.props.searchQuery;(function(e,t){return fetch("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12","&q=").concat(e,"&page=").concat(t,"&key=").concat("23976074-1864ef446645d9fee251ba638")).then((function(e){return e.ok?e.json():Promise.reject(new Error("API error!"))}))})(a,t).then((function(t){if(0===t.hits.length)return Promise.reject(new Error("Results for: ".concat(a,"  not found.")));e.setState({images:[].concat(Object(b.a)(e.state.images),Object(b.a)(t.hits)),status:"resolved"}),e.onScroll()})).catch((function(t){return e.setState({error:t,status:"rejected"})}))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,r=e.error;return"idle"===t?Object(p.jsx)(R,{}):"pending"===t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(A,{}),Object(p.jsx)(k,{images:a})]}):"rejected"===t?Object(p.jsx)(U,{onError:r.message}):"resolved"===t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{images:a}),Object(p.jsx)(E,{onClick:this.handleLoadmoreButton})]}):void 0}}]),a}(r.Component),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchbarSubmit=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{onSubmit:this.handleSearchbarSubmit}),Object(p.jsx)(P,{searchQuery:this.state.searchQuery}),Object(p.jsx)(h.b,{transition:h.a})]})}}]),a}(r.Component);c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2FpDx",SearchForm:"Searchbar_SearchForm__1O91N",SearchForm_button:"Searchbar_SearchForm_button__v4oDy",SearchForm_button_label:"Searchbar_SearchForm_button_label__1KbwB",SearchForm_input:"Searchbar_SearchForm_input__28T7z"}}},[[48,1,2]]]);
//# sourceMappingURL=main.bc945b35.chunk.js.map