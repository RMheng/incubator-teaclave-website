(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{419:function(e,t,r){"use strict";r.r(t);var n=r(27),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"third-party-dependency-vendoring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#third-party-dependency-vendoring"}},[e._v("#")]),e._v(" Third-Party Dependency Vendoring")]),e._v(" "),r("p",[e._v("For Teaclave, since all SGX/enclave dependencies are part of trusted computing base (TCB),\nin order to ease auditing, ensure product stability, as well as reduce the\npossibility of the "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Supply_chain_attack",target:"_blank",rel:"noopener noreferrer"}},[e._v("supply chain attack"),r("OutboundLink")],1),e._v(",\nwe vendored all TEE dependencies here. During the build process, both the\nuntrusted (i.e., the app part) and trusted components (i.e., the enclave part)\nwill only consume packages from this designated repository and will not\ndownload any code from external package registry such as\n"),r("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Basically, we have these submodules:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("crates-io")]),e._v(": Rust crates vendored from crates.io for non-SGX components.")]),e._v(" "),r("li",[r("code",[e._v("crates-sgx")]),e._v(": Vendored crates ported for SGX (i.e., using Teaclave SGX SDK).")]),e._v(" "),r("li",[r("code",[e._v("mesapy")]),e._v(": a Python interpreter targeting SGX.")]),e._v(" "),r("li",[r("code",[e._v("rust-sgx-sdk")]),e._v(": Teaclave SGX SDK for standard libraries and Rust bindings of\nSGX libraries.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);