<script>
    /** figure out the factorial for a number
	*	@param num, the number to be factorialized
	*/
    function factorial(num){
	    var list = [];
	    var len; // array length
	    var x = 1; // store our product
	    while (num > 0) {
	        list.push(num)
	        num--;
	   }
	   len = list.length;
	   for (var i = 0; i < len; i++) {
	       x = list[i] * x;
	   }
	   return x;
    }
    /** figure out the permutations of k out of n
     * *	@param n, the set
     * *	@param k, the subset
     */
    function permute(n,k){
        return factorial(n) / factorial(n - k);
    }
    /** figure out the combinations of k out of n
	*	@param n, the set
	*	@param k, the subset
	*/
	function combo(n,k) {
		return permute(n, k) / factorial(k);
    }
	/** figure out number of unique dice rolls
	*	@param d, the number of dice
	*	@param f, the number of faces per die
	*/
	function diceCombo(d, f){
		var n = d + f - 1;
		var k = f - 1;
		var out = factorial(n) / ( factorial(k) * factorial(d) );
		return out;
    }
	/** figure out the probability of rolling at least one type of face, given a number of dice
	*	@param d, the number of dice
	*	@param f, the number of faces per die
	*	@param m, the minimum face needed to satisfy the roll
	*/
	function diceProb(d, f, m) {
		if ( f >= m ){
			var denominator, first, last, len;
			var numerator = 0,
			list = [];
			denominator = diceCombo(d,f);
			var nFirst = d + f - 2;
			var kFirst = f - 1;
			var nLast = m + d - 2;
			var kLast = m - 1;
			first = combo(nFirst,kFirst);
			last = combo(nLast,kLast);
			if (nFirst != nLast){
				while (nFirst != nLast){
					list.push([nFirst,kFirst]);
					nFirst--; kFirst--;
					// first = combo(n,k);
				}
				len = list.length;
				for (var i = 0; i < len; i++) {
					for (var j = 0; j < 1; j++) {
					    numerator += combo(list[i][j], list[i][j+1]);
					}
				}
				numerator += last;
			} else {
			    numerator = first;
			}
			var answer = (numerator / denominator) * 100;
				return answer.toFixed(3);
		} else {
			return false;
		}
	}

	$(function(){
	    // allow user to input their own values from the DOM
		$("#checkItOut").click(function(){
		    var d = Number($("#dice").val()),
				f = Number($("#faces").val()),
				m = Number($("#min").val()),
				output = $("#output"),
				answer = diceProb(d,f,m),
				dieOrDice = (d == 1) ? 'die' : 'dice';
			output.prepend("<p>Your odds of rolling at least one <span>" + m + "</span> or better with <span>" + d + "</span> " + dieOrDice + " are <span>" + answer + "%</p>" + "</span>" )
		})
		// allow for enter key button click
		$("input").keypress(function(event){
		    if (event.which == 13) {
			    $("#checkItOut").click();
			}
		})
	});
</script>