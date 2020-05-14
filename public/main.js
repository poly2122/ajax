let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/ajax/public/page${n+1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n+=1
    }
  };
  request.send();
};

getJSON.onclick=()=>{
 
  const request=new XMLHttpRequest();
  request.open("GET",'/ajax/public/5.json');
  request.onreadystatechange=()=>{
      if(request.readyState===4 && request.status ===200){
         console.log(request.response);
         const object=JSON.parse(request.response)
          myName.textContent=object.name
         
      }
  }
  request.send()

  
}


// 添加xml到页面中
getXML.onclick = () => {
    console.log('lal');
    
    const request = new XMLHttpRequest();
    request.open("GET", "/ajax/public/4.xml");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim()) ;
      }
    };
    request.send();
  }; 
// 添加html到页面中
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/ajax/public/3.html')
    request.onload=()=>{
        // 创建html
        const html=document.createElement('html')
        // 填写html
        html.innerHTML=request.response
        // 插入html
        document.body.appendChild(html)
    }
    request.onerror=()=>{}
    request.send()
}


// 添加js到页面中
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/ajax/public/2.js')
    request.onload=()=>{
    
//    创建script标签
    const script=document.createElement('script')
    // 填写script内容
    script.innerHTML=request.response
    // 插到身体里
    document.body.appendChild(script)
}
    request.onerror=()=>{}
    request.send()
}


// 添加css到页面中
getCSS.onclick=()=>{
    // 1 创建XMLHttpRequest
    const request=new XMLHttpRequest()
    // 2.调用对象的open方法
    request.open('GET','/ajax/public/style.css');
    // 3.监听对象的onload&onerror事件
    request.onreadystatechange=()=>{
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败
        if(request.readyState===4){
            console.log('下载完成');
         if(request.status>=200&&request.status<300){
             // 创建style标签
             const style=document.createElement("style")
        // 填写style内容
        style.innerHTML=request.response
        // 插到头里面
        document.head.appendChild(style) 
         }else{
             alert('加载css失败')
         }
        }

    }
    request.send()
}
