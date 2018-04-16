import SimpleHTTPServer
import SocketServer

PORT = 8013

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    pass

Handler.extensions_map['.js'] = 'text/javascript'
Handler.extensions_map['.mjs'] = 'text/javascript+module'

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()
