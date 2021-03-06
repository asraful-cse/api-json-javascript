// :24-2: How to internet works DNS server , hosting server ...


// The specific steps involved in this process are:

// DNS query: When your browser started to load this webpage, 
// it likely first made a DNS query to find out the Cloudflare website's IP address.

// TCP handshake: Your browser opened a connection with that IP address.

// TLS handshake: Your browser also set up encryption between a Cloudflare web server
//  and your device so that attackers cannot read the data packets that travel between those two endpoints.

// HTTP request: Your browser requested the content that appears on this webpage.

// HTTP response: Cloudflare's server transmitted the content in the form of HTML,
//  CSS, and JavaScript code, broken up into a series of data packets.
//   Once your device received the packets and verified it had received all of them, 
//   your browser interpreted the HTML, CSS,
//    and JavaScript code contained in the packets to render this article about how the Internet works.
//    The whole process took only a second or two.