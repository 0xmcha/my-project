(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{68359:function(e,n,t){Promise.resolve().then(t.bind(t,67752))},8144:function(e,n,t){"use strict";t.d(n,{x3:function(){return m},e5:function(){return o},mW:function(){return u}});var r=t(60230),s=t(23263),a=t(18180),i={projectId:"rjn0a3w2",dataset:"production",apiVersion:"2023-08-06",useCdn:!0};function l(){let e=(0,r._)(['*[_type=="project"]{\n        _id,\n        id,\n        _createdAt,\n        name,\n        titlekurdish,\n        description,\n        descriptionkurdish,\n        "tags": tags[]->name,\n        "slug":slug.current,\n        "image":image.asset->url,\n        "projectimages":projectimages[].asset->url,\n        url,\n        content,\n    }']);return l=function(){return e},e}function c(){let e=(0,r._)(['*[_type=="project" && slug.current==$slug][0]{\n        _id,\n        _createdAt,\n        name,\n        titlekurdish,\n        description,\n        descriptionkurdish,\n        "tags": tags[]->name,\n        "slug":slug.current,\n        "image":image.asset->url,\n        "projectimages":projectimages[].asset->url,\n        url,\n        content,\n    }']);return c=function(){return e},e}function d(){let e=(0,r._)(['*[_type == "blog"]{\n      _id,\n      title,\n      "tags": tags[]->name,\n      publishedAt,\n      "slug":slug.current,\n      content,\n      "image":image.asset->url,\n    }']);return d=function(){return e},e}async function u(){return(0,s.e)(i).fetch((0,a.Z)(l()))}async function o(e){return(0,s.e)(i).fetch((0,a.Z)(c()),{slug:e})}async function m(){return(0,s.e)(i).fetch((0,a.Z)(d()))}},67752:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(57437),s=t(16691),a=t.n(s),i=t(2265),l=t(8144),c=t(19989);function d(){let[e,n]=(0,i.useState)([]),[t,s]=(0,i.useState)(null),[d,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{!async function(){try{let e=await (0,l.x3)();n(e)}catch(e){}}()},[]);let o=e=>{s([e]),u(!1)};return(0,r.jsx)("div",{children:(0,r.jsx)("section",{className:"text-gray-600  dark:bg-neutral-900 bg-zinc-100  body-font",children:(0,r.jsxs)("div",{className:"container px-5 md:py-20 py-24 mx-auto grid grid-flow-row gap-10 justify-center",children:[(0,r.jsxs)("div",{className:"dropdown ",children:[(0,r.jsx)("label",{tabIndex:0,className:"btn m-1",onClick:()=>{u(!d)},children:"Filter"}),(0,r.jsxs)("ul",{tabIndex:0,className:"dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52 ".concat(d?"open":""),children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{onClick:()=>s(null),children:"All"})},"all"),Array.from(new Set(e.flatMap(e=>e.tags))).map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{onClick:()=>o(e),children:e})},e))]})]}),e.filter(e=>null===t||t.some(n=>e.tags.includes(n))).map(e=>(0,r.jsx)("div",{className:"flex flex-nowrap -m-4",children:(0,r.jsx)("div",{className:"p-4 md:w-[1100px] w-[22.5rem] dark:bg-neutral-900",children:(0,r.jsx)("div",{className:"h-full border-2 shadow-lg hover:scale-105 hover:duration-700 hover:transition border-gray-200 border-opacity-60 rounded-lg overflow-hidden",children:(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsxs)("h1",{className:"title-font md:flex md:justify-between items-center md:text-4xl text-xl font-medium dark:text-zinc-200 text-neutral-900 mb-5",children:[e.title,(0,r.jsxs)("div",{className:"md:flex md:justify-between ",children:[(0,r.jsx)("span",{className:"text-[16px] mr-4 text-gray-700/50",children:e.publishedAt.toString()}),(0,r.jsx)("span",{className:"text-neutral-900 dark:text-zinc-100 md:text-[16px] text-sm p-2 rounded-lg dark:bg-zinc-500 cursor-pointer",children:e.tags})]})]}),(0,r.jsxs)("div",{className:"flex gap-10 dark:text-zinc-200 text-neutral-900 mt-4 text-lg items-center flex-wrap ",children:[(0,r.jsx)(a(),{className:"rounded-xl w-fit shadow-md",src:e.image,alt:e.title,width:450,height:450}),(0,r.jsx)(c.YI,{value:e.content})]})]})})})},e._id))]})})})}}},function(e){e.O(0,[789,23,98,989,971,596,744],function(){return e(e.s=68359)}),_N_E=e.O()}]);