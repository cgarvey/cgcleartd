/**
Copyright (c) 2015 Cathal Garvey, http://cgarvey.ie/

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var cgClearTDDirection = 0;
var cgClearTDIndex = 0;
function cgClearTD() {
	if( cgClearTDIndex > 4 ) {
		if( cgClearTDDirection == 0 ) {
			$('button[data-action="clear"]').click();
			cgClearTDDirection = 1;
			cgClearTDIndex = 0;
		}
		else {
			cgClearTDDirection = 1;
			cgClearTDIndex = 0;
			return;
		}
	}

	$( $('a[class~="column-settings-link"]')[cgClearTDIndex] ).trigger( 'click' );
	cgClearTDIndex++;
	window.setTimeout( cgClearTD, 500 );
}
cgClearTD();
