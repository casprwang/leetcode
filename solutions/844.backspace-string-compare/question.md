Given two&nbsp;strings&nbsp;S&nbsp;and T,&nbsp;return if they are equal when both are typed into empty text editors. # means a backspace character.


Example 1:


Input: S = &quot;ab#c&quot;, T = &quot;ad#c&quot;
Output: true
Explanation: Both S and T become &quot;ac&quot;.



Example 2:


Input: S = &quot;ab##&quot;, T = &quot;c#d#&quot;
Output: true
Explanation: Both S and T become &quot;&quot;.



Example 3:


Input: S = &quot;a##c&quot;, T = &quot;#a#c&quot;
Output: true
Explanation: Both S and T become &quot;c&quot;.



Example 4:


Input: S = &quot;a#c&quot;, T = &quot;b&quot;
Output: false
Explanation: S becomes &quot;c&quot; while T becomes &quot;b&quot;.


Note:


	1 &lt;= S.length &lt;= 200
	1 &lt;= T.length &lt;= 200
	S&nbsp;and T only contain&nbsp;lowercase letters and &#39;#&#39; characters.


Follow up:


	Can you solve it in O(N) time and O(1) space?





