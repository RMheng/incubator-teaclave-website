(function() {var implementors = {};
implementors["bit_vec"] = [{"text":"impl&lt;B:&nbsp;BitBlock&gt; FromIterator&lt;bool&gt; for BitVec&lt;B&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl FromIterator&lt;u8&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a u8&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;u8&gt; for Bytes","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["hashbrown_tstd"] = [{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl&lt;T&gt; FromIterator&lt;(HeaderName, T)&gt; for HeaderMap&lt;T&gt;","synthetic":false,"types":[]}];
implementors["png"] = [{"text":"impl FromIterator&lt;Transformations&gt; for Transformations","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl FromIterator&lt;TokenTree&gt; for TokenStream","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;TokenStream&gt; for TokenStream","synthetic":false,"types":[]}];
implementors["rulinalg"] = [{"text":"impl&lt;'a, T:&nbsp;'a + Copy&gt; FromIterator&lt;&amp;'a [T]&gt; for Matrix&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;'a + Copy&gt; FromIterator&lt;Row&lt;'a, T&gt;&gt; for Matrix&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;'a + Copy&gt; FromIterator&lt;RowMut&lt;'a, T&gt;&gt; for Matrix&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; FromIterator&lt;T&gt; for Vector&lt;T&gt;","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl FromIterator&lt;(String, Value)&gt; for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;T&gt; for Value","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Into&lt;String&gt;, V:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;(K, V)&gt; for Value","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; FromIterator&lt;T&gt; for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; FromIterator&lt;Pair&lt;T, P&gt;&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
implementors["teaclave_types"] = [{"text":"impl FromIterator&lt;(String, StagedFileInfo)&gt; for StagedFiles","synthetic":false,"types":[]},{"text":"impl&lt;V&gt; FromIterator&lt;(String, V)&gt; for FunctionInputFiles <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Into&lt;FunctionInputFile&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;V&gt; FromIterator&lt;(String, V)&gt; for FunctionOutputFiles <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Into&lt;FunctionOutputFile&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;(String, FileAuthTag)&gt; for OutputsTags","synthetic":false,"types":[]},{"text":"impl&lt;V&gt; FromIterator&lt;(String, V)&gt; for TaskFileOwners <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Into&lt;OwnerList&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["toml"] = [{"text":"impl FromIterator&lt;(String, Value)&gt; for Map&lt;String, Value&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()