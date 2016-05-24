/**
 * @module main
 *
 * @desc Simple example of the boilerplate.
 */
import { inspect } from 'util';

/**
 * The example log function.
 *
 * Use `util.inspect` to display object, with `depth: 7` and `colors: true`.
 *
 * @param  {Any} obj Any thing to log in the stdout
 */
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
