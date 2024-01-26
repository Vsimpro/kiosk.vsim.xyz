class Port {

    constructor( address, port, protocol ){
        this.port     = port;
        this.address  = address;       
        this.protocol = protocol;

        /* Operation Duration */
        this.start   = null;
        this.stop    = null;
        this.latency = null;

        /* State: Closed, Open, Can't determine : 0, 1, 2 */
        this.state = null;

        this.error = null;
    }


    //
    //  Get a latency for a port.
    //
    async scan_port() {
        this.start = new Date().getTime()
        var file = `${Math.random().toString().replace('0.', '').slice(0, 7)}.png` 

        try {
            const response = await fetch(`${ this.protocol }://${ this.address }:${ this.port }/${ file }`);
            /* Port is open + has a webserver behind it. */

        } catch ( error ) {
            /* Port doesn't have a webserver behind it, or is closed. */
            this.error = error;
        }

        this.stop = new Date().getTime()
        this.latency = this.stop - this.start
        return;
    }
}