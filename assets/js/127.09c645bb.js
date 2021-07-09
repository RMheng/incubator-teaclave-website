(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{535:function(e,t,a){"use strict";a.r(t);var n=a(27),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"my-first-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-first-function"}},[e._v("#")]),e._v(" My First Function")]),e._v(" "),a("p",[e._v("This documentation will guide you through executing your first function on the\nTeaclave platform.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("To run Teaclave, a hardware with Intel SGX support is needed. You can\ncheck with this list of "),a("a",{attrs:{href:"https://github.com/ayeks/SGX-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("supported hardware")]),e._v(".\nNote that you sometimes need to configure BIOS to enable SGX. Additionally, you\nneed to install driver and platform software to run SGX applications. If you are\nusing Azure confidential computing VM, please refer to "),a("RouterLink",{attrs:{to:"/docs/azure-confidential-computing/"}},[e._v("this document")]),e._v(".\nOtherwise, let install SGX driver first.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wget https://download.01.org/intel-sgx/sgx-linux/2.11/distro/ubuntu18.04-server/sgx_linux_x64_driver_2.6.0_b0a445b.bin\n$ sudo ./sgx_linux_x64_driver_2.6.0_b0a445b.bin\n$ ls /dev/isgx    # Make sure you have the SGX device\n")])])]),a("p",[e._v("Then, install SGX architectural enclaves and quoting libraries for attestation.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get install libssl-dev libcurl4-openssl-dev libprotobuf-dev\n$ echo 'deb [arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu bionic main' | sudo tee /etc/apt/sources.list.d/intel-sgx.list\n$ wget -qO - https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo apt-key add -\n$ sudo apt-get update && \\\n   sudo apt-get install libsgx-launch libsgx-urts libsgx-epid libsgx-urts libsgx-quote-ex  libsgx-aesm-quote-ex-plugin libsgx-aesm-epid-plugin\n")])])]),a("p",[e._v("For more details, you can learn from\n"),a("a",{attrs:{href:"https://download.01.org/intel-sgx/sgx-linux/2.9/docs/Intel_SGX_Installation_Guide_Linux_2.9_Open_Source.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel SGX Installation Guide")]),e._v(".")]),e._v(" "),a("p",[e._v("Docker and Docker Compose are also needed for building and trying Teaclave.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n$ sudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n$ sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io\n$ sudo usermod -aG docker your-user-name\n$ sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n$ sudo chmod +x /usr/local/bin/docker-compose\n')])])]),a("p",[e._v("If you don't have an SGX supported hardware at hand, Teaclave can also run in\nsimulation mode. However some functions like remote attestation will be disabled\nin this mode. Please start from "),a("a",{attrs:{href:"#simulation-mode"}},[e._v("here")]),e._v(" if you plan to try in\nsimulation mode.")]),e._v(" "),a("h2",{attrs:{id:"clone-and-build-teaclave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-and-build-teaclave"}},[e._v("#")]),e._v(" Clone and Build Teaclave")]),e._v(" "),a("p",[e._v("Clone the Teaclave repository:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git clone https://github.com/apache/incubator-teaclave.git\n")])])]),a("p",[e._v("Since the building dependencies are a bit complicated, we suggest to build the\nTeaclave platform with our docker images. You can learn more details about the\nbuilding environment from "),a("code",[e._v("Dockerfile")]),e._v(" under the "),a("a",{attrs:{href:"../docker"}},[a("code",[e._v("docker")])]),e._v("\ndirectory.")]),e._v(" "),a("p",[e._v("Build the Teaclave platform using docker:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ cd incubator-teaclave\n$ docker run --rm -v $(pwd):/teaclave -w /teaclave \\\n  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.12:latest \\\n   bash -c ". /root/.cargo/env && \\\n     . /opt/sgxsdk/environment && \\\n     mkdir -p build && cd build && \\\n     cmake -DTEST_MODE=ON .. && \\\n     make"\n')])])]),a("h2",{attrs:{id:"setup-attestation-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-attestation-service"}},[e._v("#")]),e._v(" Setup Attestation Service")]),e._v(" "),a("p",[e._v("For simplicity, we use Intel Attestation Service (IAS) in this tutorial. To get\nstarted, you need to enroll in Intel SGX Attestation Service in\nIntel's "),a("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/EPID-attestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("attestation service portal")]),e._v('\nby subscribing the attestation service for development (linkable is preferred).\nThen, you can find "SPID" and "Primary key" in the subscription details for\nlater usage.')]),e._v(" "),a("p",[e._v("There is one more setup if you are using linkable attestation service subscription.\nEdit the "),a("code",[e._v("/etc/aesmd.conf")]),e._v(" file and uncomment\nthe "),a("code",[e._v("default quoting type = epid_linkable")]),e._v(" line to enable linkable quotes for EPID-based attestation service\n(i.e., Intel Attestation Service). At last, the AESM service needs to be restarted by\n"),a("code",[e._v("sudo systemctl restart aesmd")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo sed -i '/^#default quoting type = epid_linkable/s/^#//' /etc/aesmd.conf\n$ sudo service aesmd restart\n")])])]),a("h2",{attrs:{id:"launch-teaclave-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-teaclave-services"}},[e._v("#")]),e._v(" Launch Teaclave Services")]),e._v(" "),a("p",[e._v("Teaclave contains multiple services. To ease the deployment, you can use\n"),a("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose")]),e._v(" to manage all services in a\ncontainerized environment.")]),e._v(" "),a("p",[e._v("Setup environment variables:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ export AS_SPID="00000000000000000000000000000000"  # SPID from IAS subscription\n$ export AS_KEY="00000000000000000000000000000000"   # Primary key/Secondary key from IAS subscription\n$ export AS_ALGO="sgx_epid"                          # Attestation algorithm, sgx_epid for IAS\n$ export AS_URL="https://api.trustedservices.intel.com:443"    # IAS URL\n')])])]),a("p",[e._v("Launch all services with "),a("code",[e._v("docker-compose")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ (cd docker && docker-compose -f docker-compose-ubuntu-1804-isgx.yml up --build)\nStarting teaclave-authentication-service ... done\nStarting teaclave-access-control-service ... done\nStarting teaclave-scheduler-service      ... done\nStarting teaclave-management-service     ... done\nStarting teaclave-execution-service      ... done\nStarting teaclave-frontend-service       ... done\nAttaching to ...\n")])])]),a("h2",{attrs:{id:"invoke-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoke-function"}},[e._v("#")]),e._v(" Invoke Function")]),e._v(" "),a("p",[e._v("We provide several examples to demonstrate the platform. Let's get started\nwith invoking a built-in function: echo, which is a simple function that takes one\ninput message and returns it.")]),e._v(" "),a("p",[e._v("This example is written in Python, and some dependencies are needed for the\nremote attestation. They can be installed with "),a("code",[e._v("pip")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ pip3 install pyopenssl toml cryptography\n")])])]),a("h3",{attrs:{id:"built-in-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-function"}},[e._v("#")]),e._v(" Built-in function")]),e._v(" "),a("p",[e._v("Then, run the echo example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd examples/python\n$ PYTHONPATH=../../sdk/python python3 builtin_echo.py 'Hello, Teaclave!'\n[+] registering user\n[+] login\n[+] registering function\n[+] creating task\n[+] approving task\n[+] invoking task\n[+] getting result\n[+] done\n[+] function return:  b'Hello, Teaclave!'\n")])])]),a("p",[e._v("If you see above log, this means that the function is successfully invoked in Teaclave.")]),e._v(" "),a("h3",{attrs:{id:"define-my-own-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-my-own-function"}},[e._v("#")]),e._v(" Define my own function")]),e._v(" "),a("p",[e._v("The previous example is to demonstrate invoking the built-in echo function. In\nTeaclave, you can also register and invoke a function written by yourself.\nFor example, we can implement an echo function in Python like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cat mesapy_echo_payload.py\ndef entrypoint(argv):\n    assert argv[0] == 'message'\n    assert argv[1] is not None\n    return argv[1]\n")])])]),a("p",[e._v("Then run the mesapy echo example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ PYTHONPATH=../../sdk/python python3 mesapy_echo.py mesapy_echo_payload.py 'Hello, Teaclave!'\n[+] registering user\n[+] login\n[+] registering function\n[+] creating task\n[+] approving task\n[+] invoking task\n[+] getting result\n[+] done\n[+] function return:  b'Hello, Teaclave!'\n")])])]),a("h2",{attrs:{id:"simulation-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation-mode"}},[e._v("#")]),e._v(" Simulation Mode")]),e._v(" "),a("p",[e._v("Clone and build Teaclave (with the "),a("code",[e._v("-DSGX_SIM_MODE=ON")]),e._v(" option in "),a("code",[e._v("cmake")]),e._v(").\nNote that if you are using Docker for Mac,\n"),a("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("increase the size of allocated memory")]),e._v(' to\navoid compilation error caused by out-of-memory, e.g., reporting a "signal: 9,\nSIGKILL: kill" error during the compilation.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git clone https://github.com/apache/incubator-teaclave.git\n$ cd incubator-teaclave\n$ docker run --rm -v $(pwd):/teaclave -w /teaclave \\\n  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.12:latest \\\n   bash -c ". /root/.cargo/env && \\\n     . /opt/sgxsdk/environment && \\\n     mkdir -p build && cd build && \\\n     cmake -DTEST_MODE=ON -DSGX_SIM_MODE=ON .. && \\\n     make"\n')])])]),a("p",[e._v("Since the attestation is disabled in the simulation mode, related environment\nvariables can be set to any values.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ export AS_SPID="00000000000000000000000000000000"\n$ export AS_KEY="00000000000000000000000000000000"\n$ export AS_ALGO="sgx_epid"\n$ export AS_URL="https://api.trustedservices.intel.com:443"\n')])])]),a("p",[e._v("At last, launch all services with "),a("code",[e._v("docker-compose")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ (cd docker && docker-compose -f docker-compose-ubuntu-1804-sgx-sim-mode.yml up --build)\n")])])]),a("p",[e._v("Install dependencies for Python client.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ pip3 install pyopenssl toml cryptography\n")])])]),a("p",[e._v("In simulation mode, run examples with "),a("code",[e._v("SGX_MODE=SW")]),e._v(" environment variable.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd examples/python\n$ SGX_MODE=SW PYTHONPATH=../../sdk/python python3 builtin_echo.py 'Hello, Teaclave!'\n[+] registering user\n[+] login\n[+] registering function\n[+] creating task\n[+] approving task\n[+] invoking task\n[+] getting result\n[+] done\n[+] function return:  b'Hello, Teaclave!'\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);