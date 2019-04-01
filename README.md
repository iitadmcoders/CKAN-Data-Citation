# CKAN-Data-Citation
This is an enhancement for CKAN to cite data in different citation styles using Digital Object Identifier (DOI) from Datacite.
This code can be customized for use in any CKAN instance especially CKAN 2.8 and above. A different approach to selecting page elements
is required on instances of CKAN earlier than version 2.8. 
You have to install Sheming datasets extension for CKAN to follow the approach below.

•	Edit additional_info.html: line 22 - add id="{{ h.scheming_language_text(field.label) }}" to field properties @/usr/lib/ckan/default/src/ckanext-scheming/ckanext/scheming/templates/scheming/package/snippets/additional_info.html

•	Edit plugin.py @/usr/lib/ckan/default/src/ckanext-iitatheming/ckanext/iitatheming/plugin.py: add toolkit.add_resource('fanstatic', 'iitatheming') to line 14

•	Create dataset_citation.js and citation_styles.js /usr/lib/ckan/default/src/ckanext-iitatheming/fanstatic/

•	Edit read.html @/usr/lib/ckan/default/src/ckanext-scheming/ckanext/scheming/templates/scheming/package/read.html: to include the following {% block package_notes %}
	{% resource 'iitatheming/dataset_citation.js' %}
	{% resource 'iitatheming/citation_styles.js' %}
	<p id="dataset_citation">
	<span style="font-weight: bold; font-size: 1.4em;">Citation:</span> 
	<select id="citation-style">
	  <option data-citation-style="apa">APA</option>
	  <option data-citation-style="harvard-cite-them-right">Harvard</option>
	  <option data-citation-style="modern-language-association">MLA</option>
	  <option data-citation-style="vancouver">Vancouver</option>
	  <option data-citation-style="chicago-fullnote-bibliography">Chicago</option>
	  <option data-citation-style="ieee">IEEE</option>
	</select>
	<div id="citation"></div>
	</p>



