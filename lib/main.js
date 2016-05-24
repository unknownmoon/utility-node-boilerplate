import { inspect } from 'util';

export function log( obj ) {

  if ( typeof obj === 'object' ) {
    console.log( inspect( obj, {
      depth: 7,
      colors: true
    } ) );
  } else {
    console.log( obj );
  }

}
