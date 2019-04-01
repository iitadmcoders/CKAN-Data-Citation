// Enable JavaScript's strict mode. Strict mode catches some common
// programming errors and throws exceptions, prevents some unsafe actions from
// being taken, and disables some confusing and bad JavaScript features.
"use strict";

$('#citation-style').change(
	function()
	{
		var citation_style = $('#citation-style').find(':selected').attr('data-citation-style');
		var doi_link = $('#Identifier').text();
		//alert(doi_link);

		var doi_link_components = doi_link.split("doi.org/");
		//alert(doi_link_components);
		var doi = doi_link_components[1];
		//alert(doi);

		var datacite_doi_citation_url = "https://data.datacite.org/text/x-bibliography;style=" + citation_style + "/" + doi;

		//alert(datacite_doi_citation_url);

		$.ajax({     
			  headers: {          
			    "Content-Type": "text/plain; charset=utf-8"        
			  },
			  type: "GET",
			  url: datacite_doi_citation_url,    
			  success : function(response) { 
			  	console.log(response);
			  	$('#citation').html(response);
			  }
			});
		
		//alert(citation_style);
		/*
		$.ajax({     
			  headers: {          
			    Accept: "text/x-bibliography; style="+ citation_style,
			    "Content-Type": "text/plain; charset=utf-8"        
			  },
			  type: "GET",
			  url: doi,    
			  success : function(response) { 
			  	console.log(response);
			  	$('#dataset_citation').append("<br>" + response);
			  }
			});
		*/	
	}
)



//alert(doi);