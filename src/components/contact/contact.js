import React from "react";
import { init } from "@emailjs/browser";
init("user_e3xioD9DxjxuKMVKwRYSc");

export default function Contact() {
  return (
    <div>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script type="text/javascript">
        (function(){emailjs.init("user_e3xioD9DxjxuKMVKwRYSc")})();
      </script>
    </div>
  );
}
