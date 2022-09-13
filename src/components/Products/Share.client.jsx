import React, { useEffect } from "react"

export default function AddThis() {
  useEffect(() => {
    setTimeout(() => {
      var addthisScript = document.createElement('script');
      addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b49007ef2f2cd42')
      if (document.body) document.body.appendChild(addthisScript)
    });
  })

  return (<div className="addthis_inline_share_toolbox" data-url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b49007ef2f2cd42"></div>)
}

/* Go to www.addthis.com/dashboard to customize your tools */

