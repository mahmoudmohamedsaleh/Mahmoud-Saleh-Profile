"""Main entry point for Flask Portfolio Application"""
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'flask_app'))

from flask_app.app import app

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
