javascript:var cgClearTDDirection = 0; var cgClearTDIndex = 0; var cgClearTDTotal = -1; function cgClearTD() { if( cgClearTDTotal < 0 ) { cgClearTDTotal = $('a[class~="column-settings-link"]').length; } if( cgClearTDTotal > -1 ) { if( cgClearTDIndex >= cgClearTDTotal ) { if( cgClearTDDirection == 0 ) { $('button[data-action="clear"]').click(); cgClearTDDirection = 1; cgClearTDIndex = 0; } else { cgClearTDDirection = 1; cgClearTDIndex = 0; return; } } $( $('a[class~="column-settings-link"]')[cgClearTDIndex] ).trigger( 'click' ); cgClearTDIndex++; window.setTimeout( cgClearTD, 350 ); } } cgClearTD();
