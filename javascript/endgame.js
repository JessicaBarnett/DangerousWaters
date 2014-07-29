	var boat = document.getElementById("manContainer");
			var nessie = document.getElementById("nessie");
			/*wtf, I have to prefix javascript too???  grr...*/
			boat.addEventListener("webkitAnimationEnd", endgame, false);
			nessie.addEventListener("webkitAnimationEnd", endgame, false);

					// http://www.sitepoint.com/css3-animation-javascript-event-handlers/
		// http://css-tricks.com/controlling-css-animations-transitions-javascript/

			var winCSS =".invisible.win, #endgame {display: block;}";
			var loseCSS = ".invisible.lose, #endgame {display: block;}";
			var surpriseCSS=".invisible.surprise, #endgame{display: block}";
			var endCSS = ".layerable{display: none;}";

			function endgame(e)
			{
				console.log("function entered!");
				var animationName = e.animationName;
				console.log(animationName);

				if (animationName == "boatSave")
				{		
					console.log("sunk!");
					addStyles(winCSS);
				}
				else if (animationName == "boatSink")
				{	
					console.log("saved!");
					addStyles(loseCSS);
				}
				else if(animationName== "nessieArise")
				{
					console.log("nessie!");
					addStyles(surpriseCSS);
				}
				else
				{	console.log("something else!");}
				return;	
			}

			function addStyles(style)
			{
				var css = document.createElement("style");
				css.type = "text/css";
				css.innerHTML = style + endCSS;
				console.log(style + endCSS);
				document.getElementsByTagName("head")[0].appendChild(css);
				return;
			}

			function reloadPage(){
				location.reload();
			}