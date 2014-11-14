// Configure requirejs 
requirejs.config({
	paths: {
		jquery:"http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
		MathJax:"http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML&amp;delayStartupUntil=configured",
		Mustache:"http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min"
	},
	shim: {
		"MathJax": {
            exports: "MathJax",
            init: function() {
                MathJax.Hub.Config({
					tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
				});
				MathJax.Hub.Startup.onload();
				return MathJax;
			}
		}
	}
});

// Wait until jquery and mustache have loaded
define(["jquery","Mustache","MathJax"],function($,Mustache,MathJax){
	var proofTemplate = $("#proofTemplate");
	var proof = "insert proof here";
	// Render Mustache template with custom data
	var render = Mustache.render(proofTemplate.html(), {
		sidebar: {
			items: [
				{
					text: "Set Theory",
					subitems: [
						{subtext:"Set Operations"},
						{subtext:"Images"},
						{subtext:"Pre-images"},
						{subtext:"Equivalence Relations"},
						{subtext:"Countable Sets"},
						{subtext:"Set Equivalence"},
						{subtext:"Continuum"},
						{subtext:"Cantor-Bernstein Theorem"},
						{subtext:"Partially Ordered Sets"},
						{subtext:"Isomorphisms"},
						{subtext:"Ordered Sums & Products"},
						{subtext:"Well-Ordered Sets"},
						{subtext:"Ordinal Numbers"},
						{subtext:"Well Ordering Theorem"},
						{subtext:"Axiom of Choice"},
						{subtext:"Transfinite Induction"},
						{subtext:"Rings"},
						{subtext:"Semi-rings"},
						{subtext:"Borel Algebras"}
					]
				},
				{text: "Metric Spaces",
				 subitems: [
					{subtext:"Metrics"},
					{subtext:"Cauchy-Schwarz Inequality"},
					{subtext:"Minkowski Inequality"},
					{subtext:"Continuous Mappings"},
					{subtext:"Closure"},
					{subtext:"Open & Closed Sets"},
					{subtext:"Limit Points"},
					{subtext:"Convergence"},
					{subtext:"Dense"},
					{subtext:"Separable Spaces"},
					{subtext:"Limit Points"},
					{subtext:"The Cantor Set"},
					{subtext:"Cauchy Sequences"},
					{subtext:"Complete Spaces"},
					{subtext:"Cantor's Intersection Theorem"},
					{subtext:"Baire's Theorem"},
					{subtext:"Contraction Mappings"}
					]
				},
				{text: "Topological Spaces"},
				{text: "Linear Spaces"},
				{text: "Linear Functionals"},
				{text: "Linear Operators"},
				{text: "Measure Theory"},
				{text: "Integration"},
				{text: "Differentiation"}
			]
		},
		proof: [
			{
				statement: "Theorem 3: The intersection of an arbitrary number of closed sets is closed.",
				steps : [
					{
						text:"Given arbitrary sets $F_{\\alpha}$ indexed by a parameter $\\alpha$."+
						" Let $x$ be a limit point of the intersection $F = \\bigcap\\limits_{\\alpha} F_{\\alpha}$",
						annotate: "Start with the limit point to show that the set contains it, and is therefore closed."
					},
					{text:"Then any neighborhood $B_{\\varepsilon}(x)$ contains infinitely many"+
					 "points of each $F$, and hence infinitely many points of each $F_\\alpha$."},
					{text: "Hence $x$ is a limit point of each $F_\\alpha$, and then $x$ belongs to each $F_\\alpha$"+
					"since all $F_\\alpha$ are closed."},
					{text:"Therefore $x\\in F$ so $F$ is closed."},
					{text:"$QED.$"}
				]		
			},
			{
				statement: "Theorem 3: The intersection of an arbitrary number of closed sets is closed.",
				steps : [
					{
						text:"Given arbitrary sets $F_{\\alpha}$ indexed by a parameter $\\alpha$."+
						" Let $x$ be a limit point of the intersection $F = \\bigcap\\limits_{\\alpha} F_{\\alpha}$",
						annotate: "Start with the limit point to show that the set contains it, and is therefore closed."
					},
					{text:"Then any neighborhood $B_{\\varepsilon}(x)$ contains infinitely many"+
					 "points of each $F$, and hence infinitely many points of each $F_\\alpha$."},
					{text: "Hence $x$ is a limit point of each $F_\\alpha$, and then $x$ belongs to each $F_\\alpha$"+
					"since all $F_\\alpha$ are closed."},
					{text:"Therefore $x\\in F$ so $F$ is closed."},
					{text:"$QED.$"}
				]		
			}
		]
	});
	
	// Refresh Mathjax
	MathJax.Hub.Queue(["Typeset", MathJax.Hub,render]);
	
	$(document.body).html(render);
	
	$(".expandable").click(function(event){
		event.stopPropagation();
		$(this).toggleClass("expand");
	});
});


