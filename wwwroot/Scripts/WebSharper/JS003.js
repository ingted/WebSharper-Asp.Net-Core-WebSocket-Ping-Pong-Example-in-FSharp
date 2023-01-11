(function(Global)
{
 "use strict";
 var JS003,Client,CommbusSite,Site,JS003_Templates,WebSharper,Concurrency,Remoting,AjaxRemotingProvider,UI,Var$1,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateInstance,console,AspNetCore,WebSocket,Client$1,WithEncoding,JSON,ClientSideJson,Provider,Doc,Runtime$1,Client$2,Templates;
 JS003=Global.JS003=Global.JS003||{};
 Client=JS003.Client=JS003.Client||{};
 CommbusSite=JS003.CommbusSite=JS003.CommbusSite||{};
 Site=JS003.Site=JS003.Site||{};
 JS003_Templates=Global.JS003_Templates=Global.JS003_Templates||{};
 WebSharper=Global.WebSharper;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 console=Global.console;
 AspNetCore=WebSharper&&WebSharper.AspNetCore;
 WebSocket=AspNetCore&&AspNetCore.WebSocket;
 Client$1=WebSocket&&WebSocket.Client;
 WithEncoding=Client$1&&Client$1.WithEncoding;
 JSON=Global.JSON;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 Doc=UI&&UI.Doc;
 Runtime$1=WebSharper&&WebSharper.Runtime;
 Client$2=UI&&UI.Client;
 Templates=Client$2&&Client$2.Templates;
 Client.Main$59$20=function(rvReversed)
 {
  return function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("JS003:JS003.Server.DoSomething:-1027172111",[e.Vars.Hole("texttoreverse").$1.Get()]),function(a)
    {
     rvReversed.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 Client.Main=function()
 {
  var rvReversed,b,R,_this,t,p,i;
  rvReversed=Var$1.Create$1("");
  return(b=(R=rvReversed.get_View(),(_this=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"onsend",function()
  {
   return t.i;
  },function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("JS003:JS003.Server.DoSomething:-1027172111",[e.Vars.Hole("texttoreverse").$1.Get()]),function(a)
    {
     rvReversed.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  })),t)),(_this.h.push({
   $:2,
   $0:"reversed",
   $1:R
  }),_this))),(p=Handler.CompleteHoles(b.k,b.h,[["texttoreverse",0,null]]),(i=new TemplateInstance.New(p[1],JS003_Templates.mainform(p[0])),b.i=i,i))).get_Doc();
 };
 Client.serverOp=Global.ignore;
 Client.prop=function(server,state,s2cMsg)
 {
  var _;
  _=null;
  return Concurrency.Delay(function()
  {
   console.log("websocket recieved:");
   console.log(s2cMsg);
   return s2cMsg.$==0?(server.Post("pong"),Concurrency.Return("pong")):s2cMsg.$==2?(server.Post("mega killed"),Concurrency.Return("connected")):Concurrency.Return("diconnected");
  });
 };
 Client.initState=function(server)
 {
  return"connected";
 };
 Client.ws=function(connPort,gs,mh,clientProp)
 {
  var _;
  function clientAgent(genState,msgHandler,server)
  {
   var _$1;
   _$1=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return([genState(server),function(state)
    {
     return function(msg)
     {
      var _$2;
      _$2=null;
      return Concurrency.Delay(function()
      {
       return((msgHandler(server))(state))(msg);
      });
     };
    }]);
   });
  }
  Concurrency.Start((_=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(WithEncoding.ConnectStateful(function(a)
   {
    return JSON.stringify(((Provider.Id())())(a));
   },function(a)
   {
    return((Provider.Id())())(JSON.parse(a));
   },connPort,function($1)
   {
    return clientAgent(gs,mh,$1);
   }),function(a)
   {
    clientProp(a);
    return Concurrency.Zero();
   });
  })),null);
  return Doc.Element("pre",[],[]);
 };
 CommbusSite.get_Sitelet$43$74=function(connPort)
 {
  return Client.ws(connPort,Client.initState,Runtime$1.Curried3(Client.prop),function(s)
  {
   Client.serverOp(s);
  });
 };
 Site.Main$129$78=function(connPort)
 {
  return Client.ws(connPort,Client.initState,Runtime$1.Curried3(Client.prop),function(s)
  {
   Client.serverOp(s);
  });
 };
 JS003_Templates.mainform=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"mainform"
  },h):void 0;
 };
}(self));
