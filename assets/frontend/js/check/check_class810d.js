document.addEventListener("DOMContentLoaded",function(){const targetNodes=document.querySelectorAll('.atm-child');if(targetNodes.length>0){targetNodes.forEach(node=>{const observer=new MutationObserver((mutationsList)=>{const changes=[];mutationsList.forEach(mutation=>{let change={type:mutation.type,timestamp:new Date().toISOString()};if(mutation.type==='childList'){change.addedNodes=Array.from(mutation.addedNodes).map(node=>{if(node.nodeType===Node.ELEMENT_NODE){return node.outerHTML;}else if(node.nodeType===Node.TEXT_NODE){return node.data;}});change.removedNodes=Array.from(mutation.removedNodes).map(node=>{if(node.nodeType===Node.ELEMENT_NODE){return node.outerHTML;}else if(node.nodeType===Node.TEXT_NODE){return node.data;}});}else if(mutation.type==='attributes'){change.attributeName=mutation.attributeName;change.oldValue=mutation.oldValue;}else if(mutation.type==='characterData'){change.oldValue=mutation.oldValue;}
changes.push(change);});const xhr=new XMLHttpRequest();const params=`data=${encodeURIComponent(JSON.stringify({data:changes}))}`;xhr.open('GET',`/check-class?${params}`,true);xhr.setRequestHeader('Content-Type','application/json');xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status===200){}else{}}};xhr.send();});const config={childList:true,attributes:true,subtree:true,characterData:true};observer.observe(node,config);});}});