/**
   *Add The Funny Title
  */
  var title=document.title;
  var hiddenProperty = 'hidden' in document ? 'hidden' :
      'webkitHidden' in document ? 'webkitHidden' :
          'mozHidden' in document ? 'mozHidden' :
              null;
  var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
  var onVisibilityChange = function(){
      if (!document[hiddenProperty]) {
          document.title = title;
      }else{
          document.title = "不要走嘛,快回来! Σ(っ °Д °;)っ - " + title;
      }
  }
  document.addEventListener(visibilityChangeEvent, onVisibilityChange);
