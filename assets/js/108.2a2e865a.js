(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{519:function(e,t,a){"use strict";a.r(t);var n=a(27),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"teaclave-command-line-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-command-line-tool"}},[e._v("#")]),e._v(" Teaclave Command Line Tool")]),e._v(" "),a("p",[e._v("The Teaclave command line tool ("),a("code",[e._v("teaclave_cli")]),e._v(") provides utilities to\ninteractive with the platform. The command line tool has several sub-commands:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("encrypt")]),e._v("/"),a("code",[e._v("decrypt")]),e._v(": These two subcommands are to encrypt/decrypt data used on\nthe platform. Supported algorithms include AES-GCM (128bit and 256 bit), and\nTeaclave File (128bit).")]),e._v(" "),a("li",[a("code",[e._v("verify")]),e._v(": Verify the signatures of the enclave info (which contains "),a("code",[e._v("MRSIGNER")]),e._v("\nand "),a("code",[e._v("MRENCLAVE")]),e._v(") signed by auditors with their public keys. The enclave info\nis used for remote attestation, Please verify it before connecting the\nplatform with the client SDK.")]),e._v(" "),a("li",[a("code",[e._v("attest")]),e._v(": Establish an attested TLS with one of the Teaclave services and get\nan attestation report, validate it with attestation service's cert and display\nthe report details.")])]),e._v(" "),a("h2",{attrs:{id:"encrypt-decrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-decrypt"}},[e._v("#")]),e._v(" Encrypt/Decrypt")]),e._v(" "),a("p",[e._v("Here are two examples to encrypt and decrypt files with the CLI.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./teaclave_cli encrypt \\\n    --algorithm teaclave-file-128 \\\n    --key 00000000000000000000000000FF1234 \\\n    --input-file ${FILE} \\\n    --output-file ${ENCRYPTED_FILE} \\\n    --print-cmac\ncfba09e4c2bc72ea9e5392d779c2926c\n\n$ ./teaclave_cli decrypt \\\n    --algorithm teaclave-file-128 \\\n    --key 00000000000000000000000000FF1234 \\\n    --input-file ${ENCRYPTED_FILE} \\\n    --output-file ${DECRYPTED_FILE}\n")])])]),a("h2",{attrs:{id:"verify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[e._v("#")]),e._v(" Verify")]),e._v(" "),a("p",[e._v("Here is an example to verify auditors' signatures of the enclave info file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ ./teaclave_cli verify \\\n    --enclave-info ../examples/enclave_info.toml \\\n    --public-keys $(find ../examples -name "*.public.pem") \\\n    --signatures $(find ../examples -name "*.sign.sha256")\nVerify successfully.\n')])])]),a("h2",{attrs:{id:"attest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attest"}},[e._v("#")]),e._v(" Attest")]),e._v(" "),a("p",[e._v("Here is an example to display the attestation report from a Teaclave service.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./teaclave_cli attest --address accvm-dev:7776 --as-ca-cert ../../keys/ias_root_ca_cert.pem\nReport Freshness: 1854s\nSGX Quote status: SwHardeningNeeded\nVersion and signature/key type: Version 2, EPID Linkable signature\nGID or reserved: 3014\nSecurity version of the QE: 11\nSecurity version of the PCE: 10\nID of the QE vendor: 00000000-XXXX-XXXX-XXXX-XXXXXXXXXXXX\nCustom user-defined data (hex): 75b6024c00000000000000000000000000000000\nCPU version (hex): 0f0f0305ff8006000000000000000000\nSSA Frame extended feature set: 0\nAttributes of the enclave (hex): 07000000000000000700000000000000\nEnclave measurement (hex): eadeb5537962d2451a8619fb6a4b10b72f56479e0b7db0bb9c3f5edc143ca6eb\nHash of the enclave singing key (hex): 83d719e77deaca1470f6baf62a4d774303c899db69020f9c70ee1dfc08c7ce9e\nEnclave product ID: 0\nSecurity version of the enclave: 0\nThe value of REPORT (hex): 317cb5c0d9a26747a08833e51bac8ca2ce814aa362c8cd0e2672fdcb6bfee77b9ba32ed7d605778aa52b9f2d2ce698f83ec49e6beecb89c684d861bb078d7dc2\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);