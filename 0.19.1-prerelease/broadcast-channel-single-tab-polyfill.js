!function(){if("BroadcastChannel"in window)return;const e=new Map;window.BroadcastChannel=class{constructor(t){this.name=t,e.get(t)||e.set(t,new Set),e.get(t).add(this)}postMessage(t){setTimeout((()=>{e.get(this.name).forEach((e=>{var s;e!==this&&(null===(s=e.onmessage)||void 0===s||s.call(e,{data:t}))}))}),0)}close(){e.get(this.name).delete(this)}}}();