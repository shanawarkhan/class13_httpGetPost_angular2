System.register(["angular2/core","./data"],function(t){var e,n,o,r=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=3>c?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(i=(3>c?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t}],execute:function(){o=function(){function t(){}return t.prototype.getContacts=function(){return Promise.resolve(n.CONTACTS)},t.prototype.getContactById=function(t){return Promise.resolve(n.CONTACTS.find(function(e){return e.id==t}))},t.prototype.insertContact=function(t){Promise.resolve(n.CONTACTS).then(function(e){return e.push(t)})},t=r([e.Injectable(),c("design:paramtypes",[])],t)}(),t("ContactService",o)}}});