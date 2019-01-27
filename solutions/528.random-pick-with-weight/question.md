Given an array w of positive integers, where w[i] describes the weight of index i,&nbsp;write a function pickIndex&nbsp;which randomly&nbsp;picks an index&nbsp;in proportion&nbsp;to its weight.

Note:


	1 &lt;= w.length &lt;= 10000
	1 &lt;= w[i] &lt;= 10^5
	pickIndex&nbsp;will be called at most 10000 times.


Example 1:


Input: 
[&quot;Solution&quot;,&quot;pickIndex&quot;]
[[[1]],[]]
Output: [null,0]



Example 2:


Input: 
[&quot;Solution&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]


Explanation of Input Syntax:

The input is two lists:&nbsp;the subroutines called&nbsp;and their&nbsp;arguments.&nbsp;Solution&#39;s&nbsp;constructor has one argument, the&nbsp;array w. pickIndex has no arguments.&nbsp;Arguments&nbsp;are&nbsp;always wrapped with a list, even if there aren&#39;t any.
