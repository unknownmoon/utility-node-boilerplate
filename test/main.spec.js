import { expect } from 'chai';
import { stub } from 'sinon';
import { log } from '../lib/main';

describe( 'Main', function ( ) {

  it( 'should be able to log string', function ( ) {
    let msg = 'Test message !';

    stub( console, 'log', ( logMsg ) => {

      expect( logMsg )
        .to.equal( msg );

      // tear down the provision just after the first call of console.log
      console.log.restore( );

    } );

    log( msg );

  } );

  it( 'should be able to log object', function ( ) {
    let msg = 'Test message !';
    let obj = { msg: msg };

    stub( console, 'log', ( logMsg ) => {

      expect( logMsg )
        .has.string( 'msg' )
        .and.has.string( msg );

      // tear down the provision just after the first call of console.log
      console.log.restore( );

    } );

    log( obj );

  } );

} );
